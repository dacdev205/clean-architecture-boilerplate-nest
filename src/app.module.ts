import { EmailModule } from '~/infrastructure/email/email.module';
import { QueuesModule } from '~/infrastructure/queues/queues.module';
import { Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminSendSecretCodeProcessor } from './application/auth/processor/admin-send-secret-code.processor';
import { AdminSendScretCodeActiveAccountUseCase } from './application/auth/use-case/admin-send-secret-code.use-case';
import { CustomerSignInUseCase } from './application/auth/use-case/customer-sign-in.use-case';
import { CustomerSignUpUseCase } from './application/auth/use-case/customer-sign-up.use-case';
import { ValidateAdminLoginUseCase } from './application/auth/use-case/validate-admin-login.use-case';
import { ValidateCustomerLoginUseCase } from './application/auth/use-case/validate-customer-login.use-case';
import { CreateCategoryUseCase } from './application/category/use-case/create-category.use-case';
import { GetCategoryUseCase } from './application/category/use-case/get-category.use-case';
import { ActiveCustomerAccountUseCase } from './application/customer/use-case/active-account.use-case';
import { CustomerChangePasswordUseCase } from './application/customer/use-case/customer-change-password.use-case';
import { AuthQueue } from './application/queue-job/auth.queue';
import { CheckEmailExistedUseCase } from './application/user/use-case/check-email-existed.use-case';
import { CreateUserUseCase } from './application/user/use-case/create-user.use-case';
import { GetStartedUseCase } from './application/user/use-case/get-started.use-case';
import { GetUserByEmailUseCase } from './application/user/use-case/get-user-by-email.use-case';
import { GetUserByIdUseCase } from './application/user/use-case/get-user-by-id.use.case';
import { GenSlugService } from './application/utils/gen-slug.service';
import { GenerateTokenService } from './application/utils/gen-token.service';
import { HashService } from './application/utils/hash.service';
import { CATEGORY_REPOSITORY } from './domain/repositories/category.repository';
import { QUEUE_JOB_REPOSITORY } from './domain/repositories/queue-job.repository';
import { USER_REPOSITORY } from './domain/repositories/user.repository';
import { EnvironmentService } from './infrastructure/environment/environment.service';
import { PrismaModule } from './infrastructure/prisma/prisma.module';
import { PrismaCategoryRepository } from './infrastructure/prisma/repositories/category.repository';
import { PrismaUserRepository } from './infrastructure/prisma/repositories/customer.repository';
import { QueuesService } from './infrastructure/queues/queues.service';
import { BullQueueJobRepository } from './infrastructure/queues/repositories/queue.repository';
import { AuthAdapter } from './interfaces/adapters/auth.adapter';
import { CategoryAdapter } from './interfaces/adapters/category.adapter';
import { CustomerAdapter } from './interfaces/adapters/customer.adapter';
import { UserAdapter } from './interfaces/adapters/user.adapter';
import { AuthController } from './interfaces/controller/auth/auth.controller';
import { CategoriesController } from './interfaces/controller/categories';
import { CustomerController } from './interfaces/controller/customer/customer.controller';
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
  CustomerController,
  UsersController,
  AuthController,
  UsersController,
];

const adapters: Provider[] = [
  { provide: CATEGORY_REPOSITORY, useClass: PrismaCategoryRepository },
  { provide: USER_REPOSITORY, useClass: PrismaUserRepository },
  { provide: QUEUE_JOB_REPOSITORY, useClass: BullQueueJobRepository },
  CategoryAdapter,
  UserAdapter,
  AuthAdapter,
  CustomerAdapter,
];
const processors: Provider[] = [AdminSendSecretCodeProcessor];
const utilities: Provider[] = [
  GenSlugService,
  HashService,
  ConfigService,
  GenerateTokenService,
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
  //Categoty
  GetCategoryUseCase,
  CreateCategoryUseCase,

  //Auth
  AdminSendScretCodeActiveAccountUseCase,
  CustomerSignInUseCase,
  ValidateAdminLoginUseCase,
  CustomerSignUpUseCase,

  //User
  CreateUserUseCase,
  CheckEmailExistedUseCase,
  GetStartedUseCase,
  ValidateCustomerLoginUseCase,
  GetUserByEmailUseCase,
  GetUserByIdUseCase,

  //Customer
  ActiveCustomerAccountUseCase,
  CustomerChangePasswordUseCase,
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
  providers: [
    ...adapters,
    ...useCases,
    ...utilities,
    ...guardians,
    ...processors,
  ],
})
export class AppModule {}
