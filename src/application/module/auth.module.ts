import { LocalStrategy } from 'src/application/guards/strategies/local.strategy';
import { UsersModule } from 'src/application/module/users.module';
import { EmailModule } from 'src/infrastructure/email/email.module';
import { PrismaModule } from 'src/infrastructure/prisma/prisma.module';
import { QueuesModule } from 'src/infrastructure/queues/queues.module';
import { jwtConstants } from '~/common/constants/jwt.constants';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '../controllers/auth/auth.controller';
import { JwtStrategy } from '../guards/strategies/jwt.strategy';
import { HashService } from '../services/hash.service';
import { AuthQueue } from '../use-cases/auth/auth.queue';
import { ChangePasswordUseCase } from '../use-cases/auth/change-password.use-case';
import { ResetPassword } from '../use-cases/auth/reset-password.use-case';
import { RetryActiveUseCase } from '../use-cases/auth/retry-active.use-case';
import { RetryResetPassword } from '../use-cases/auth/retry-reset-password.use-case copy';
import { SignInUseCase } from '../use-cases/auth/sign-in.use-case';
import { SignUpUseCase } from '../use-cases/auth/sign-up.use-case';
import { VerifyAccountUseCase } from '../use-cases/auth/verify-account.use-case';
import { ValidateUserUseCase } from '../use-cases/users/validate-user.use-case';

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
        signOptions: { expiresIn: jwtConstants.ACCESS_TOKEN_EXPIRES_IN },
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
