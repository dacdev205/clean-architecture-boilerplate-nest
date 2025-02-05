import { QUEUE_NAMES } from '~/common/constants/queue.constants';
import { ConfigurableModuleClass } from '~/infrastructure/queues/queue.module.definition';
import { BullModule } from '@nestjs/bullmq';
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QueuesService } from './queues.service';

@Module({})
export class QueuesModule extends ConfigurableModuleClass {
  static forRoot(): DynamicModule {
    return {
      module: QueuesModule,
      imports: [
        BullModule.forRootAsync({
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
            connection: {
              host: configService.get<string>('REDIS_HOST'),
              port: configService.get<number>('REDIS_PORT'),
              password: configService.get<string>('REDIS_PASS'),
            },
          }),
        }),
        BullModule.registerQueueAsync({
          name: QUEUE_NAMES.AUTH_QUEUE,
        }),
      ],
      providers: [QueuesService],
      exports: [QueuesService],
    };
  }
}
