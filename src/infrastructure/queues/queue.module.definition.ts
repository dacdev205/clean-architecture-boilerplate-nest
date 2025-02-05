import { QueueModuleOptions } from '~/common/interfaces/queue-module-options.interface';
import { ConfigurableModuleBuilder } from '@nestjs/common';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<QueueModuleOptions>()
    .setClassMethodName('forRoot')
    .build();
