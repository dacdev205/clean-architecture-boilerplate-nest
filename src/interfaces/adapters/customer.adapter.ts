import {
  CreateUserUseCaseDto,
  CreateUserUseCaseResultDto,
} from '~/application/customer/dtos/create-user.dto';
import { CreateUserUseCase } from '~/application/customer/use-case/create-user.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerAdapter {
  constructor(private readonly _createUserUseCase: CreateUserUseCase) {}
  async create(
    data: CreateUserUseCaseDto,
  ): Promise<CreateUserUseCaseResultDto> {
    return this._createUserUseCase.execute(data);
  }
}
