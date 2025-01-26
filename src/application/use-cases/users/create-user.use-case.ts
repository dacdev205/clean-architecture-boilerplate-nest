import { SignUpDto } from '~/application/dtos/auth';
import { UserRepository } from '~/application/repositories/users.repositories';
import {
  EMAIL_ALREADY_EXIST,
  PHONE_ALREADY_EXIST,
} from '~/content/errors/user.error';
import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { FindUserByEmailUseCase } from './find-user-by-email.use-case';
import { FindUserByPhoneUseCase } from './find-user-by-phone.use-case';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly findUserByEmailUseCase: FindUserByEmailUseCase,
    private readonly findUserByPhoneUseCase: FindUserByPhoneUseCase,
  ) {}
  async create(signUpDto: SignUpDto): Promise<User> {
    const {
      email,
      phone,
      firstName,
      lastName,
      password,
      codeId,
      codeExpiredAt,
    } = signUpDto;
    const data = {
      email,
      phone,
      firstName,
      lastName,
      password,
      codeId,
      codeExpiredAt,
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
    return await this.userRepository.create({ data });
  }
}
