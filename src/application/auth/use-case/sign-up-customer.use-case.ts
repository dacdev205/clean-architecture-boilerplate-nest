import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { AuthQueue } from '~/application/queue-job/auth.queue';
import { CreateUserUseCase } from '~/application/user/use-case/create-user.use-case';
import { GetUserByEmailUseCase } from '~/application/user/use-case/get-user-by-email.use-case';
import { HashService } from '~/application/utils/hash.service';
import { JWT_TOKEN } from '~/common/constants/jwt.constants';
import { ActivationJobData } from '~/common/interfaces/activation-job-data.interface';
import { EMAIL_ALREADY_EXIST } from '~/content/errors/user.error';
import { ConflictException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {
  SignUpCustomerUseCaseDto,
  SignUpCustomerUseCaseResultDto,
} from '../dtos/sign-up-customer.dto';

@Injectable()
export class SignUpCustomerUseCase {
  constructor(
    private readonly _hashService: HashService,
    private readonly _createUserUseCase: CreateUserUseCase,
    private readonly _getUserByEmailUseCase: GetUserByEmailUseCase,
    private readonly _jwtService: JwtService,
    private readonly _configService: ConfigService,
    private _authQueue: AuthQueue,
  ) {}
  async execute(
    data: SignUpCustomerUseCaseDto,
  ): Promise<SignUpCustomerUseCaseResultDto> {
    const { email, password, first_name, last_name, phone } = data;
    const existedEmail = await this._getUserByEmailUseCase.execute(email);
    if (existedEmail) {
      throw new ConflictException(EMAIL_ALREADY_EXIST);
    }
    const hashedPassword = await this._hashService.hashPassword(password);
    const userData = {
      email,
      password: hashedPassword,
      first_name,
      last_name,
      code_id: uuidv4(),
      code_expiredAt: dayjs().add(1, 'day').toDate(),
      phone,
    };
    const user = await this._createUserUseCase.execute(userData);
    const activationJobData: ActivationJobData = {
      to: email,
      activationCode: userData.code_id as string,
    };
    await this._authQueue.addSendActiveCodeJob(activationJobData);
    const payload = {
      sub: user.id,
      username: user.last_name,
      role: user.role,
    };
    return {
      access_token: await this._jwtService.signAsync(payload, {
        secret: this._configService.get<string>('JWT_CUSTOMER_SECRET_KEY'),
        expiresIn: JWT_TOKEN.ACCESS_TOKEN_EXPIRES_IN,
      }),
      refresh_token: await this._jwtService.signAsync(payload, {
        secret: this._configService.get<string>('JWT_CUSTOMER_SECRET_KEY'),
        expiresIn: JWT_TOKEN.REFRESH_TOKEN_EXPIRES_IN,
      }),
    };
  }
}
