import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './application/module/auth.module';
import { BrandModule } from './application/module/brands.module';
import { CategoryModule } from './application/module/categories.module';
import { ProductModule } from './application/module/products.module';
import { UsersModule } from './application/module/users.module';
import { EmailModule } from './infrastructure/email/email.module';
import { QueuesModule } from './infrastructure/queues/queues.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: parseInt(process.env.REDIS_PORT) || 6379,
      },
    }),
    CategoryModule,
    BrandModule,
    ProductModule,
    UsersModule,
    AuthModule,
    QueuesModule,
    EmailModule,
  ],
})
export class AppModule {}
