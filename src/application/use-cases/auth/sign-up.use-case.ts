import dayjs from 'dayjs';
import { SignUpDto } from 'src/application/dtos/auth';
import { HashService } from 'src/application/services/hash.service';
import { jwtConstants } from 'src/common/constants/jwtConstants';
import { ActivationJobData } from 'src/common/interface/activation-job-data.interface';
import {
  EMAIL_ALREADY_EXIST,
  PHONE_ALREADY_EXIST,
} from 'src/content/errors/user.error';
import { v4 as uuidv4 } from 'uuid';
import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserUseCase } from '../users/create-user.use-case';
import { FindUserByEmailUseCase } from '../users/find-user-by-email.use-case';
import { FindUserByPhoneUseCase } from '../users/find-user-by-phone.use-case';
import { AuthQueue } from './auth.queue';

@Injectable()
export class SignUpUseCase {
  constructor(
    private readonly hashService: HashService,
    private readonly findUserByEmailUseCase: FindUserByEmailUseCase,
    private readonly findUserByPhoneUseCase: FindUserByPhoneUseCase,
    private readonly createUserUseCase: CreateUserUseCase,

    private jwtService: JwtService,
    private authQueue: AuthQueue,
  ) {}
  async signUp(signUpDto: SignUpDto): Promise<any> {
    const { email, phone, firstName, lastName, password } = signUpDto;
    const hash_password = await this.hashService.hashPassword(password);
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
      await this.findUserByEmailUseCase.findOneByEmail(email);
    const existing_phone =
      await this.findUserByPhoneUseCase.findOneByPhone(phone);
    if (existing_email) {
      throw new ConflictException(EMAIL_ALREADY_EXIST);
    } else if (existing_phone) {
      throw new ConflictException(PHONE_ALREADY_EXIST);
    }
    const user = await this.createUserUseCase.create(data);
    const activationJobData: ActivationJobData = {
      to: email,
      activationCode: data.codeId,
    };
    await this.authQueue.addSendActiveCodeJob(activationJobData);
    const payload = {
      sub: user.id,
      username: user.lastName,
      roles: user.roles,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: jwtConstants.REFRESH_TOKEN_EXPIRES_IN,
      }),
    };
  }
}
