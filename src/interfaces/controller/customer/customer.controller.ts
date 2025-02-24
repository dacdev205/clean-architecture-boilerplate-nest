import {
  CustomerChangePasswordRequestDto,
  CustomerChangePasswordResponseDto,
} from './../../dtos/customer-change-password.dto';
import { CustomerAdapter } from '~/interfaces/adapters/customer.adapter';
import { Body, Controller, Get, Put, Query, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from '~/common/pipes/zod-validation.schema';
import { CustomerChangePasswordSchema } from '~/interfaces/dtos/customer-change-password.dto';

@Controller('customer')
export class CustomerController {
  constructor(public readonly _customerAdapter: CustomerAdapter) {}
  @Get('active-account')
  async activateAccount(@Query('token') token: string): Promise<any> {
    return await this._customerAdapter.activeAccount(token);
  }
  @Put('change-password')
  async changePassword(
    @Body(new ZodValidationPipe(CustomerChangePasswordSchema))
    data: CustomerChangePasswordRequestDto,
  ): Promise<CustomerChangePasswordResponseDto> {
    return await this._customerAdapter.changePassword(data);
  }
}
