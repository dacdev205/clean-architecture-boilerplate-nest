import { EmailModuleOption } from '~/common/interfaces/email.interfaces';
import { DynamicModule, Module } from '@nestjs/common';
import { HandlebarsService } from '../handlebar/handlebar.service';
import { EmailProcessor } from './email.processor';
import { EmailService } from './email.service';
@Module({})
export class EmailModule {
  static forRoot(options: EmailModuleOption): DynamicModule {
    return {
      module: EmailModule,
      providers: [
        {
          provide: 'EMAIL_OPTIONS',
          useValue: options,
        },
        EmailService,
        EmailProcessor,
        HandlebarsService,
      ],
      exports: [EmailProcessor, EmailService],
    };
  }
}
