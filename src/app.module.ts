import { EmailModule } from '~/infrastructure/email/email.module';
import { QueuesModule } from '~/infrastructure/queues/queues.module';
import { Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { SignInCustomerUseCase } from './application/auth/use-case/sign-in-customer.use-case';
import { SignUpCustomerUseCase } from './application/auth/use-case/sign-up-customer.use-case';
import { ValidateCustomerLoginUseCase } from './application/auth/use-case/validate-customer-login.use-case';
import { CreateCategoryUseCase } from './application/category/use-case/create-category.use-case';
import { GetCategoryUseCase } from './application/category/use-case/get-category.use-case';
import { CreateUserUseCase } from './application/customer/use-case/create-user.use-case';
import { GetUserByEmailUseCase } from './application/customer/use-case/get-user-by-email.use-case';
import { GetUserByIdUseCase } from './application/customer/use-case/get-user-by-id.use.case';
import { GenSlugService } from './application/utils/gen-slug.service';
import { HashService } from './application/utils/hash.service';
import { CATEGORY_REPOSITPRY } from './domain/repositories/category.repository';
import { USER_REPOSITORY } from './domain/repositories/user.repository';
import { EnvironmentService } from './infrastructure/environment/environment.service';
import { PrismaModule } from './infrastructure/prisma/prisma.module';
import { PrismaCategoryRepository } from './infrastructure/prisma/repositories/category.repository';
import { PrismaCustomerRepository } from './infrastructure/prisma/repositories/customer.repository';
import { AuthAdapter } from './interfaces/adapters/auth.adapter';
import { CategoryAdapter } from './interfaces/adapters/category.adapter';
import { CustomerAdapter } from './interfaces/adapters/customer.adapter';
import { AuthController } from './interfaces/controller/auth/auth.controller';
import { CategoriesController } from './interfaces/controller/categories';
import { JwtAdminGuard } from './interfaces/controller/guardians/guard/jwt-admin.guard';
import { JwtCustomerGuard } from './interfaces/controller/guardians/guard/jwt-customer.guard';
import { LocalCustomerGuard } from './interfaces/controller/guardians/guard/local-customer.guard';
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
  CustomerAdapter,
  AuthAdapter,
];
const utilities: Provider[] = [GenSlugService, HashService, ConfigService];
const guardians: Provider[] = [
  //Admin
  // JwtAdminStrategy,
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
  SignUpCustomerUseCase,
  ValidateCustomerLoginUseCase,
  GetUserByEmailUseCase,
  GetUserByIdUseCase,
];
const infrastructure = [
  PrismaModule,
  QueuesModule,
  JwtModule.register({}),
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
