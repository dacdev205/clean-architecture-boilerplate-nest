import { Inject } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepository,
} from 'src/domain/repositories/user.repository';

export class CheckEmailExistedUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    public readonly _userRepository: UserRepository,
  ) {}
  async execute(email: string): Promise<boolean> {
    return await this._userRepository.checkEmail({ where: { email } });
  }
}
