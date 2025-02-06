import { ChangePasswordUseCase } from '../../usecases/auth/change-password.usecase';
import { SignUpUseCase } from '~/application/usecases/auth/sign-up.usecase';
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import {
  ChangePasswordDto,
  ChangePasswordSchema,
  ResetPassDto,
  ResetPassSchema,
  SignUpDto,
  SignUpSchema,
  VerifyAccountDto,
  VerifyAccountSchema,
} from 'src/application/dtos/auth';
import { AuthResponse } from '~/application/responses/auth-response';
import { UserProfile } from '~/application/responses/user-profile-response';
import { CurrentUser } from 'src/common/decorators/req-user.decorators';
import { SignInUseCase } from '~/application/usecases/auth/sign-in.usecase';
import { LocalAuthGuard } from 'src/application/guards/local-auth.guard';
import { VerifyAccountUseCase } from '~/application/usecases/auth/verify-account.usecase';
import { RetryActiveUseCase } from '~/application/usecases/auth/retry-active.usecase';
import { JwtAuthGuard } from 'src/application/guards/jwt-auth.guard';
import { User } from '@prisma/client';
import { RetryResetPassword } from '~/application/usecases/auth/retry-reset-password.usecase';
import { ResetPassword } from '~/application/usecases/auth/reset-password.usecase';
import { ZodValidationPipe } from '~/common/pipes/zod-validation.schema';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly _signUpUseCase: SignUpUseCase,
    private readonly _signInUseCase: SignInUseCase,
    private readonly _verifyAccountUseCase: VerifyAccountUseCase,
    private readonly _retryActiveUseCase: RetryActiveUseCase,
    private readonly _changePasswordUseCase: ChangePasswordUseCase,
    private readonly _retryResetPassword: RetryResetPassword,
    private readonly _resetPassword: ResetPassword,
  ) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@CurrentUser() user: UserProfile): Promise<AuthResponse> {
    return await this._signInUseCase.signIn(user);
  }
  @Post('register')
  @UsePipes(new ZodValidationPipe(SignUpSchema))
  async register(@Body() signUpDto: SignUpDto): Promise<AuthResponse> {
    return await this._signUpUseCase.signUp(signUpDto);
  }
  @Post('verify-account')
  @UsePipes(new ZodValidationPipe(VerifyAccountSchema))
  async verifyAccount(
    @Body() verifyAccountDto: VerifyAccountDto,
  ): Promise<any> {
    return await this._verifyAccountUseCase.verifyAccount(verifyAccountDto);
  }
  @Post('retry-active')
  async retryActiveAccount(@Body('email') email: string): Promise<any> {
    return await this._retryActiveUseCase.retryActive(email);
  }
  @UseGuards(JwtAuthGuard)
  @Put('change-password')
  @UsePipes(new ZodValidationPipe(ChangePasswordSchema))
  async changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
  ): Promise<User> {
    return await this._changePasswordUseCase.changePassword(changePasswordDto);
  }
  @Post('retry-password')
  async retryResetPasswordCode(@Body('email') email: string): Promise<any> {
    return await this._retryResetPassword.retryResetPassword(email);
  }
  @Put('reset-password')
  @UsePipes(new ZodValidationPipe(ResetPassSchema))
  async resetPasswordCode(@Body() resetPassDto: ResetPassDto): Promise<User> {
    return await this._resetPassword.resetPassword(resetPassDto);
  }
}
