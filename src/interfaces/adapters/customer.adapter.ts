import {
  CustomerChangePasswordUseCaseDto,
  CustomerChangePasswordUseCaseResultDto,
} from '~/application/customer/dtos/customer-change-password.dto';
import { CustomerChangePasswordUseCase } from '~/application/customer/use-case/customer-change-password.use-case';
import { Injectable } from '@nestjs/common';
import { ActiveCustomerAccountUseCase } from './../../application/customer/use-case/active-account.use-case';

@Injectable()
export class CustomerAdapter {
  constructor(
    public readonly _activeCustomerAccountUseCase: ActiveCustomerAccountUseCase,
    private readonly _customerChangePasswordUseCase: CustomerChangePasswordUseCase,
  ) {}
  async activeAccount(token: string): Promise<any> {
    return await this._activeCustomerAccountUseCase.execute(token);
  }
  async changePassword(
    data: CustomerChangePasswordUseCaseDto,
  ): Promise<CustomerChangePasswordUseCaseResultDto> {
    return await this._customerChangePasswordUseCase.execute(data);
  }
}
