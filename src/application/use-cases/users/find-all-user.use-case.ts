import { UserRepository } from '~/application/repositories/users.repositories';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
