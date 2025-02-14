import { Inject, Injectable } from '@nestjs/common';
import {
  CreateUserUseCaseDto,
  CreateUserUseCaseResultDto,
} from '../dtos/create-user.dto';
import {
  UserRepository,
  USER_REPOSITORY,
} from 'src/domain/repositories/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    public readonly _userRepository: UserRepository,
  ) {}
  async execute(
    data: CreateUserUseCaseDto,
  ): Promise<CreateUserUseCaseResultDto> {
    const {
      email,
      password,
      phone,
      first_name,
      last_name,
      code_id,
      code_expiredAt,
    } = data;
    return await this._userRepository.create({
      data: {
        email,
        password,
        phone,
        first_name,
        last_name,
        code_id,
        code_expiredAt,
      },
    });
  }
}
