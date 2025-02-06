import dayjs from 'dayjs';
import { SignUpDto } from 'src/application/dtos/auth';
import { HashService } from 'src/application/services/hash.service';
import {
  EMAIL_ALREADY_EXIST,
  PHONE_ALREADY_EXIST,
} from 'src/content/errors/user.error';
import { v4 as uuidv4 } from 'uuid';
import { JWT_TOKEN } from '~/common/constants/jwt.constants';
import { ActivationJobData } from '~/common/interfaces/activation-job-data.interface';
import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserUseCase } from '../users/create-user.use-case';
import { FindUserByEmailUseCase } from '../users/find-user-by-email.use-case';
import { FindUserByPhoneUseCase } from '../users/find-user-by-phone.use-case';
import { AuthQueue } from './auth.queue';

@Injectable()
export class SignUpUseCase {
  constructor(
    private readonly _hashService: HashService,
    private readonly _findUserByEmailUseCase: FindUserByEmailUseCase,
    private readonly _findUserByPhoneUseCase: FindUserByPhoneUseCase,
    private readonly _createUserUseCase: CreateUserUseCase,

    private _jwtService: JwtService,
    private _authQueue: AuthQueue,
  ) {}
  async signUp(signUpDto: SignUpDto): Promise<any> {
    const { email, phone, firstName, lastName, password } = signUpDto;
    const hash_password = await this._hashService.hashPassword(password);
    const data = {
      email,
      phone,
      firstName,
      lastName,
      codeId: uuidv4(),
      codeExpiredAt: dayjs().add(1, 'days').toDate(),
      password: hash_password,
    };
    const existing_email =
      await this._findUserByEmailUseCase.findOneByEmail(email);
    const existing_phone =
      await this._findUserByPhoneUseCase.findOneByPhone(phone);
    if (existing_email) {
      throw new ConflictException(EMAIL_ALREADY_EXIST);
    } else if (existing_phone) {
      throw new ConflictException(PHONE_ALREADY_EXIST);
    }
    const user = await this._createUserUseCase.create(data);
    const activationJobData: ActivationJobData = {
      to: email,
      activationCode: data.codeId,
    };
    await this._authQueue.addSendActiveCodeJob(activationJobData);
    const payload = {
      sub: user.id,
      username: user.lastName,
      roles: user.roles,
    };

    return {
      access_token: await this._jwtService.signAsync(payload, {
        expiresIn: JWT_TOKEN.ACCESS_TOKEN_EXPIRES_IN,
      }),
      refresh_token: await this._jwtService.signAsync(payload, {
        expiresIn: JWT_TOKEN.REFRESH_TOKEN_EXPIRES_IN,
      }),
    };
  }
}
