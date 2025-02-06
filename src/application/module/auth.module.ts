import { LocalStrategy } from 'src/application/guards/strategies/local.strategy';
import { UsersModule } from 'src/application/module/users.module';
import { PrismaModule } from 'src/infrastructure/prisma/prisma.module';
import { QueuesModule } from 'src/infrastructure/queues/queues.module';
import { JWT_TOKEN } from '~/common/constants/jwt.constants';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '../controllers/auth/auth.controller';
import { JwtStrategy } from '../guards/strategies/jwt.strategy';
import { HashService } from '../services/hash.service';
import { AuthQueue } from '../usecases/auth/auth.queue';
import { ChangePasswordUseCase } from '../usecases/auth/change-password.usecase';
import { ResetPassword } from '../usecases/auth/reset-password.usecase';
import { RetryActiveUseCase } from '../usecases/auth/retry-active.usecase';
import { RetryResetPassword } from '../usecases/auth/retry-reset-password.usecase';
import { SignInUseCase } from '../usecases/auth/sign-in.usecase';
import { SignUpUseCase } from '../usecases/auth/sign-up.usecase';
import { VerifyAccountUseCase } from '../usecases/auth/verify-account.usecase';
import { ValidateUserUseCase } from '../usecases/users/validate-user.use-case';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    PassportModule,
    QueuesModule.forRoot(),
    JwtModule.registerAsync({
      inject: [ConfigService],
      global: true,
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_ACCESS_TOKEN_SECRET_KEY'),
        signOptions: { expiresIn: JWT_TOKEN.ACCESS_TOKEN_EXPIRES_IN },
      }),
    }),
  ],
  providers: [
    LocalStrategy,
    ValidateUserUseCase,
    JwtStrategy,
    AuthQueue,
    HashService,
    SignUpUseCase,
    SignInUseCase,
    ChangePasswordUseCase,
    ResetPassword,
    RetryActiveUseCase,
    RetryResetPassword,
    VerifyAccountUseCase,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
