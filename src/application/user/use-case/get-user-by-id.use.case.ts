import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepository,
} from 'src/domain/repositories/user.repository';
import { USER_NOT_FOUND } from '~/content/errors/user.error';
import { GetUserUseCaseResultDto } from '../dtos/get-user-by-id.dto';

@Injectable()
export class GetUserByIdUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    public readonly _userRepository: UserRepository,
  ) {}
  async execute(id: string): Promise<GetUserUseCaseResultDto | null> {
    return await this._userRepository.findOne({ where: { id } });
  }
}
