import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepository,
} from 'src/domain/repositories/user.repository';
import { GetUserUseCaseResultDto } from '../dtos/get-user-by-id.dto';
import { USER_NOT_FOUND } from '~/content/errors/user.error';

@Injectable()
export class GetUserByEmailUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    public readonly _userRepository: UserRepository,
  ) {}
  async execute(email: string): Promise<GetUserUseCaseResultDto | null> {
    return await this._userRepository.findOne({ where: { email } });
  }
}
