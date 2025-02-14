import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepository,
} from 'src/domain/repositories/user.repository';
import { User } from 'src/domain/types/user.type';

@Injectable()
export class GetUserByEmailUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    public readonly _userRepository: UserRepository,
  ) {}
  async execute(email: string): Promise<User | null> {
    return await this._userRepository.findOne({ where: { email } });
  }
}
