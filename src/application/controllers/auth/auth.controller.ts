import { ChangePasswordUseCase } from './../../use-cases/auth/change-password.use-case';
import { SignUpUseCase } from 'src/application/use-cases/auth/sign-up.use-case';
import { Body, Controller, Post, Put, UseGuards } from '@nestjs/common';
import {
  ChangePasswordDto,
  ResetPassDto,
  SignUpDto,
  VerifyAccountDto,
} from 'src/application/dtos/auth';
import { AuthResponse } from '~/application/responses/auth-response';
import { UserProfile } from '~/application/responses/user-profile-response';
import { CurrentUser } from 'src/common/decorators/req-user.decorators';
import { SignInUseCase } from 'src/application/use-cases/auth/sign-in.use-case';
import { LocalAuthGuard } from 'src/application/guards/local-auth.guard';
import { VerifyAccountUseCase } from 'src/application/use-cases/auth/verify-account.use-case';
import { RetryActiveUseCase } from 'src/application/use-cases/auth/retry-active.use-case';
import { JwtAuthGuard } from 'src/application/guards/jwt-auth.guard';
import { User } from '@prisma/client';
import { RetryResetPassword } from 'src/application/use-cases/auth/retry-reset-password.use-case copy';
import { ResetPassword } from 'src/application/use-cases/auth/reset-password.use-case';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly signUpUseCase: SignUpUseCase,
    private readonly signInUseCase: SignInUseCase,
    private readonly verifyAccountUseCase: VerifyAccountUseCase,
    private readonly retryActiveUseCase: RetryActiveUseCase,
    private readonly changePasswordUseCase: ChangePasswordUseCase,
    private readonly retryResetPassword: RetryResetPassword,
    private readonly resetPassword: ResetPassword,
  ) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@CurrentUser() user: UserProfile): Promise<AuthResponse> {
    return await this.signInUseCase.signIn(user);
  }
  @Post('register')
  async register(@Body() signUpDto: SignUpDto): Promise<AuthResponse> {
    return await this.signUpUseCase.signUp(signUpDto);
  }
  @Post('verify-account')
  async verifyAccount(
    @Body() verifyAccountDto: VerifyAccountDto,
  ): Promise<any> {
    return await this.verifyAccountUseCase.verifyAccount(verifyAccountDto);
  }

  @Post('retry-active')
  async retryActiveAccount(@Body('email') email: string): Promise<any> {
    return await this.retryActiveUseCase.retryActive(email);
  }
  @UseGuards(JwtAuthGuard)
  @Put('change-password')
  async changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
  ): Promise<User> {
    return await this.changePasswordUseCase.changePassword(changePasswordDto);
  }
  @Post('retry-password')
  async retryResetPasswordCode(@Body('email') email: string): Promise<any> {
    return await this.retryResetPassword.retryResetPassword(email);
  }
  @Put('reset-password')
  async resetPasswordCode(@Body() ressetPassDto: ResetPassDto): Promise<User> {
    return await this.resetPassword.resetPassword(ressetPassDto);
  }
}
