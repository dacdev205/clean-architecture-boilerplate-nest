import { UserRepository } from '~/application/repositories/users.repositories';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private readonly _userRepository: UserRepository) {}
  async findAll(): Promise<User[]> {
    return this._userRepository.findAll();
  }
}
