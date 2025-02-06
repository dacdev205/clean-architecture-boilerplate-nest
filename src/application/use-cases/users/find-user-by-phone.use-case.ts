import { UserRepository } from '~/application/repositories/users.repositories';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class FindUserByPhoneUseCase {
  constructor(private readonly _userRepository: UserRepository) {}
  async findOneByPhone(phone: string): Promise<User> {
    return this._userRepository.findOne({ where: { phone } });
  }
}
