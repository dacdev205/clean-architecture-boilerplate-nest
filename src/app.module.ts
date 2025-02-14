import { EmailModule } from '~/infrastructure/email/email.module';
import { QueuesModule } from '~/infrastructure/queues/queues.module';
import { Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SignInCustomerUseCase } from './application/auth/use-case/sign-in-customer.use-case';
import { SignUpCustomerUseCase } from './application/auth/use-case/sign-up-customer.use-case';
import { ValidateAdminLoginUseCase } from './application/auth/use-case/validate-admin-login.use-case';
import { ValidateCustomerLoginUseCase } from './application/auth/use-case/validate-customer-login.use-case';
import { CreateCategoryUseCase } from './application/category/use-case/create-category.use-case';
import { GetCategoryUseCase } from './application/category/use-case/get-category.use-case';
import { AuthQueue } from './application/queue-job/auth.queue';
import { CheckEmailExistedUseCase } from './application/user/use-case/check-email-existed.use-case';
import { CreateUserUseCase } from './application/user/use-case/create-user.use-case';
import { GetStartedUseCase } from './application/user/use-case/get-started.use-case';
import { GetUserByEmailUseCase } from './application/user/use-case/get-user-by-email.use-case';
import { GetUserByIdUseCase } from './application/user/use-case/get-user-by-id.use.case';
import { GenSlugService } from './application/utils/gen-slug.service';
import { HashService } from './application/utils/hash.service';
import { CATEGORY_REPOSITPRY } from './domain/repositories/category.repository';
import { USER_REPOSITORY } from './domain/repositories/user.repository';
import { EnvironmentService } from './infrastructure/environment/environment.service';
import { PrismaModule } from './infrastructure/prisma/prisma.module';
import { PrismaCategoryRepository } from './infrastructure/prisma/repositories/category.repository';
import { PrismaCustomerRepository } from './infrastructure/prisma/repositories/customer.repository';
import { QueuesService } from './infrastructure/queues/queues.service';
import { AuthAdapter } from './interfaces/adapters/auth.adapter';
import { CategoryAdapter } from './interfaces/adapters/category.adapter';
import { UserAdapter } from './interfaces/adapters/user.adapter';
import { AuthController } from './interfaces/controller/auth/auth.controller';
import { CategoriesController } from './interfaces/controller/categories';
import { JwtAdminGuard } from './interfaces/controller/guardians/guard/jwt-admin.guard';
import { JwtCustomerGuard } from './interfaces/controller/guardians/guard/jwt-customer.guard';
import { LocalAdminGuard } from './interfaces/controller/guardians/guard/local-admin.guard';
import { LocalCustomerGuard } from './interfaces/controller/guardians/guard/local-customer.guard';
import { JwtAdminStrategy } from './interfaces/controller/guardians/strategies/admin/jwt-admin.strategy';
import { LocalAdminStrategy } from './interfaces/controller/guardians/strategies/admin/local-admin.strategy';
import { JwtCustomerStrategy } from './interfaces/controller/guardians/strategies/customer/jwt-customer.strategy';
import { LocalCustomerStrategy } from './interfaces/controller/guardians/strategies/customer/local-customer.strategy';
import { UsersController } from './interfaces/controller/users/users.controller';

const currentEnvFilePath = new EnvironmentService().getCurrentEnvFilePath();
new EnvironmentService().readEnvFilePath(currentEnvFilePath);

const controllers = [
  CategoriesController,
  UsersController,
  AuthController,
  UsersController,
];

const adapters: Provider[] = [
  { provide: CATEGORY_REPOSITPRY, useClass: PrismaCategoryRepository },
  { provide: USER_REPOSITORY, useClass: PrismaCustomerRepository },
  CategoryAdapter,
  UserAdapter,
  AuthAdapter,
];
const utilities: Provider[] = [
  GenSlugService,
  HashService,
  ConfigService,
  AuthQueue,
  QueuesService,
];
const guardians: Provider[] = [
  //Admin
  LocalAdminGuard,
  LocalAdminStrategy,
  JwtAdminStrategy,
  JwtAdminGuard,

  //Customer
  LocalCustomerGuard,
  JwtCustomerGuard,
  LocalCustomerStrategy,
  JwtCustomerStrategy,
];
const useCases: Provider[] = [
  CreateCategoryUseCase,
  GetCategoryUseCase,
  CreateUserUseCase,
  SignInCustomerUseCase,
  ValidateAdminLoginUseCase,
  SignUpCustomerUseCase,
  CheckEmailExistedUseCase,
  GetStartedUseCase,
  ValidateCustomerLoginUseCase,
  GetUserByEmailUseCase,
  GetUserByIdUseCase,
];
const infrastructure = [
  PrismaModule,
  QueuesModule.forRoot(),
  PassportModule,
  JwtModule.register({}),
  ConfigModule.forRoot({
    envFilePath: currentEnvFilePath,
    isGlobal: true,
  }),
  EmailModule.forFeature({
    service: process.env.MAIL_SERVICE as 'smtp' | 'sendgrid',
    apiKey: process.env.SENDGRID_API_KEY,
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  }),
];
@Module({
  imports: [...infrastructure],
  controllers: [...controllers],
  providers: [...adapters, ...useCases, ...utilities, ...guardians],
})
export class AppModule {}
