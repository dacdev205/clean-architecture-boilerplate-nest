import { UserRepository } from '~/application/repositories/users.repositories';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class FindUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async findOneById(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
}
