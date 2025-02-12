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
    private readonly _userRepository: UserRepository,
    private readonly _findUserByEmailUseCase: FindUserByEmailUseCase,
    private readonly _findUserByPhoneUseCase: FindUserByPhoneUseCase,
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
    const existingEmail =
      await this._findUserByEmailUseCase.findOneByEmail(email);
    const existingPhone =
      await this._findUserByPhoneUseCase.findOneByPhone(phone);
    if (existingEmail) {
      throw new ConflictException(EMAIL_ALREADY_EXIST);
    } else if (existingPhone) {
      throw new ConflictException(PHONE_ALREADY_EXIST);
    }
    return await this._userRepository.create({ data });
  }
}
