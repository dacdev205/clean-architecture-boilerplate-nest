import {
  CustomerSignUpUseCaseDto,
  CustomerSignUpUseCaseResultDto,
} from '~/application/auth/dtos/customer-sign-up.dto';
import { CustomerSignInUseCase } from '~/application/auth/use-case/customer-sign-in.use-case';
import { CustomerSignUpUseCase } from '~/application/auth/use-case/customer-sign-up.use-case';
import { Injectable } from '@nestjs/common';
import { AdminSendScretCodeActiveAccountUseCase } from './../../application/auth/use-case/admin-send-secret-code.use-case';
import {
  CustomerSignInUseCaseDto,
  CustomerSignInUseCaseResultDto,
} from '../../application/auth/dtos/customer-sign-in.dto';

@Injectable()
export class AuthAdapter {
  constructor(
    private readonly _CustomerSignUpUseCase: CustomerSignUpUseCase,
    private readonly _CustomerSignInUseCase: CustomerSignInUseCase,
    private readonly _adminSendScretCodeActiveAccountUseCase: AdminSendScretCodeActiveAccountUseCase,
  ) {}
  async signUp(
    data: CustomerSignUpUseCaseDto,
  ): Promise<CustomerSignUpUseCaseResultDto> {
    return this._CustomerSignUpUseCase.execute(data);
  }
  async sendCode(email: string): Promise<any> {
    return this._adminSendScretCodeActiveAccountUseCase.execute(email);
  }
  async signIn(
    data: CustomerSignInUseCaseDto,
  ): Promise<CustomerSignInUseCaseResultDto> {
    return this._CustomerSignInUseCase.execute(data);
  }
}
