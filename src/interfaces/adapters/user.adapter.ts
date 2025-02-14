import {
  CreateUserUseCaseDto,
  CreateUserUseCaseResultDto,
} from '~/application/user/dtos/create-user.dto';
import { CreateUserUseCase } from '~/application/user/use-case/create-user.use-case';
import { GetStartedUseCase } from '~/application/user/use-case/get-started.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserAdapter {
  constructor(
    private readonly _createUserUseCase: CreateUserUseCase,
    private _getStartedUseCase: GetStartedUseCase,
  ) {}
  async create(
    data: CreateUserUseCaseDto,
  ): Promise<CreateUserUseCaseResultDto> {
    return this._createUserUseCase.execute(data);
  }
  async getStarted(email: string): Promise<boolean> {
    return this._getStartedUseCase.excute(email);
  }
}
