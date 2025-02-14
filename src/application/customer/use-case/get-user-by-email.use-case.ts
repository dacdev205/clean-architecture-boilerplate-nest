import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepository,
} from 'src/domain/repositories/user.repository';
import { USER_NOT_FOUND } from '~/content/errors/user.error';
import { GetUserUseCaseResultDto } from '../dtos/get-user-by-id.dto';

@Injectable()
export class GetUserByEmailUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    public readonly _userRepository: UserRepository,
  ) {}
  async execute(email: string): Promise<GetUserUseCaseResultDto> {
    const user = await this._userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    return user;
  }
}
