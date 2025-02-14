import {
  SignUpCustomerUseCaseDto,
  SignUpCustomerUseCaseResultDto,
} from '~/application/auth/dtos/sign-up-customer.dto';
import { SignInCustomerUseCase } from '~/application/auth/use-case/sign-in-customer.use-case';
import { SignUpCustomerUseCase } from '~/application/auth/use-case/sign-up-customer.use-case';
import { Injectable } from '@nestjs/common';
import { SignInCustomerUseCaseDto } from './../../application/auth/dtos/sign-in-customer.dto';
import { UserProfileResponseDto } from '../dtos/user-profile.dto';

@Injectable()
export class AuthAdapter {
  constructor(
    private readonly _signUpCustomerUseCase: SignUpCustomerUseCase,
    private readonly _signInCustomerUseCase: SignInCustomerUseCase,
  ) {}
  async signUp(
    data: SignUpCustomerUseCaseDto,
  ): Promise<SignUpCustomerUseCaseResultDto> {
    return this._signUpCustomerUseCase.execute(data);
  }
  async signIn(
    data: UserProfileResponseDto,
  ): Promise<SignUpCustomerUseCaseResultDto> {
    return this._signInCustomerUseCase.execute(data);
  }
}
