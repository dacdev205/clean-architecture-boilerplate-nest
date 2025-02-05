import { EmailModuleOption } from '~/common/interfaces/email.interfaces';
import { ConfigurableModuleBuilder } from '@nestjs/common';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<EmailModuleOption>()
    .setClassMethodName('forFeature')
    .build();
