import { AuthModule } from '~/application/module/auth.module';
import { BrandModule } from '~/application/module/brands.module';
import { CategoryModule } from '~/application/module/categories.module';
import { ProductModule } from '~/application/module/products.module';
import { UsersModule } from '~/application/module/users.module';
import { EmailModule } from '~/infrastructure/email/email.module';
import { QueuesModule } from '~/infrastructure/queues/queues.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentService } from './infrastructure/environment/environment.service';

const currentEnvFilePath = new EnvironmentService().getCurrentEnvFilePath();
new EnvironmentService().readEnvFilePath(currentEnvFilePath);

@Module({
  imports: [
    CategoryModule,
    BrandModule,
    ProductModule,
    UsersModule,
    AuthModule,
    QueuesModule,
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
  ],
})
export class AppModule {}
