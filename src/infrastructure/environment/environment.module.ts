import { DynamicModule } from '@nestjs/common';
import { EnvironmentService } from './environment.service';

export class EnvironmentModule {
  static register(): DynamicModule {
    return {
      module: EnvironmentModule,
      providers: [
        {
          provide: EnvironmentService,
          useValue: new EnvironmentService(),
        },
      ],
      exports: [EnvironmentService],
    };
  }
}
