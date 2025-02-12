import { UserRepository } from '~/application/repositories/users.repositories';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class FindUserByIdUseCase {
  constructor(private readonly _userRepository: UserRepository) {}
  async findOneById(id: string): Promise<User | null> {
    return this._userRepository.findOne({ where: { id } });
  }
}
