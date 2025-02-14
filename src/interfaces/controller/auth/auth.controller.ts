import {
  SignUpCustomerResponseSchema,
  SignUpCustomerRequestSchema,
  SignUpCustomerRequestDto,
  SignUpCustomerResponseDto,
} from '../../dtos/sign-up-customer.dto';
import { CurrentUser } from 'src/common/decorators/req-user.decorators';
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { JwtAdminGuard } from '../guardians/guard/jwt-admin.guard';
import { JwtCustomerGuard } from '../guardians/guard/jwt-customer.guard';
import { LocalAdminGuard } from '../guardians/guard/local-admin.guard';
import { UserAdapter } from 'src/interfaces/adapters/user.adapter';
import { ZodValidationPipe } from '~/common/pipes/zod-validation.schema';
import { AuthAdapter } from 'src/interfaces/adapters/auth.adapter';
import { LocalCustomerGuard } from '../guardians/guard/local-customer.guard';
import { UserProfileResponseDto } from '~/application/auth/dtos/user-profile.dto';
import {
  SignInCustomerRequestDto,
  SignInCustomerRequestSchema,
  SignInCustomerResponseDto,
} from 'src/interfaces/dtos/sign-in-customer.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly _authAdapter: AuthAdapter) {}
  @UseGuards(LocalCustomerGuard)
  @Post('customer/login')
  async login(
    @CurrentUser() data: SignInCustomerRequestDto,
  ): Promise<SignInCustomerResponseDto> {
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
    @Body(new ZodValidationPipe(SignUpCustomerRequestSchema))
    data: SignUpCustomerRequestDto,
  ): Promise<SignUpCustomerResponseDto> {
    return await this._authAdapter.signUp(data);
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
