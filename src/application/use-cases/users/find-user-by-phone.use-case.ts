import { UserRepository } from '~/application/repositories/users.repositories';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class FindUserByPhoneUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async findOneByPhone(phone: string): Promise<User> {
    return this.userRepository.findOne({ where: { phone } });
  }
}
