import {
  CustomerSignUpResponseSchema,
  CustomerSignUpRequestSchema,
  CustomerSignUpRequestDto,
  CustomerSignUpResponseDto,
} from '../../dtos/sign-up-customer.dto';
import { CurrentUser } from 'src/common/decorators/req-user.decorators';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { ZodValidationPipe } from '~/common/pipes/zod-validation.schema';
import { AuthAdapter } from 'src/interfaces/adapters/auth.adapter';
import { LocalCustomerGuard } from '../guardians/guard/local-customer.guard';
import {
  CustomerSignInRequestDto,
  CustomerSignInRequestSchema,
  CustomerSignInResponseDto,
} from 'src/interfaces/dtos/sign-in-customer.dto';
import {
  EmailRequestDto,
  EmailRequestSchema,
} from '~/interfaces/dtos/email.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly _authAdapter: AuthAdapter) {}
  @UseGuards(LocalCustomerGuard)
  @Post('customer/login')
  async login(
    @CurrentUser() data: CustomerSignInRequestDto,
  ): Promise<CustomerSignInResponseDto> {
    return await this._authAdapter.signIn(data);
  }
  //
  // @UseGuards(LocalAdminGuard)
  // @Post('login-admin')
  // async loginAdmin(@CurrentUser() user: UserProfile): Promise<AuthResponse> {
  //   return await this._signInAdminUseCase.execute(user);
  // }
  @Post('customer/register')
  async register(
    @Body(new ZodValidationPipe(CustomerSignUpRequestSchema))
    data: CustomerSignUpRequestDto,
  ): Promise<CustomerSignUpResponseDto> {
    return await this._authAdapter.signUp(data);
  }
  @Post('send-sercet-code')
  async sendCode(
    @Body(new ZodValidationPipe(EmailRequestSchema)) data: EmailRequestDto,
  ): Promise<any> {
    return await this._authAdapter.sendCode(data.email);
  }
  //
  // @Post('register-admin')
  // @UsePipes(new ZodValidationPipe(SignUpSchema))
  // async registerAdmin(@Body() signUpDto: SignUpDto): Promise<AuthResponse> {
  //   return await this._signUpAdminUseCase.execute(signUpDto);
  // }
  // @Put('admin/block-user')
  // @UseGuards(JwtAdminGuard)
  // async blockUser(@Body('email') email: string): Promise<void> {
  //   return await this._blockUserUseCase.execute(email);
  // }
  // @Put('admin/unblock-user')
  // @UseGuards(JwtAdminGuard)
  // async unblockUser(@Body('email') email: string): Promise<void> {
  //   return await this._unblockUserUseCase.execute(email);
  // }

  // @UseGuards(JwtCustomerGuard)
  // @Put('change-password')
  // @UsePipes(new ZodValidationPipe(ChangePasswordSchema))
  // async changePassword(
  //   @Body() changePasswordDto: ChangePasswordDto,
  // ): Promise<User> {
  //   return await this._changePasswordUseCase.execute(changePasswordDto);
  // }
  // @Post('retry-password')
  // async retryResetPasswordCode(@Body('email') email: string): Promise<any> {
  //   return await this._retryResetPassword.execute(email);
  // }
  // @Put('reset-password')
  // @UsePipes(new ZodValidationPipe(ResetPassSchema))
  // async resetPasswordCode(@Body() resetPassDto: ResetPassDto): Promise<User> {
  //   return await this._resetPassword.execute(resetPassDto);
  // }
}
