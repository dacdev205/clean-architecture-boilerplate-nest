import { UserRepository } from '~/application/repositories/users.repositories';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class FindUserByEmailUseCase {
  constructor(private readonly _userRepository: UserRepository) {}
  async findOneByEmail(email: string): Promise<User | null> {
    return this._userRepository.findOne({ where: { email } });
  }
}
