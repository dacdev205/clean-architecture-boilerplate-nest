import { Job } from 'bullmq';
import { SendSecretCodeJobData } from '~/common/interfaces/activation-job-data.interface';
import {
  JOB_NAMES,
  QUEUE_NAMES,
} from '~/infrastructure/queues/constants/queue.constants';
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { LazyModuleLoader } from '@nestjs/core';

@Processor(QUEUE_NAMES.AUTH_QUEUE)
export class AdminSendSecretCodeProcessor extends WorkerHost {
  constructor(private readonly _lazyModuleLoader: LazyModuleLoader) {
    super();
  }
  async process(job: Job<any>): Promise<void> {
    const { EmailModule } = await import(
      '../../../infrastructure/email/email.module'
    );
    const moduleRef = this._lazyModuleLoader.load(() => EmailModule);
    const { EmailService } = await import(
      '../../../infrastructure/email/email.service'
    );
    const emailJobService = (await moduleRef).get(EmailService, {
      strict: false,
    });
    switch (job.name) {
      case JOB_NAMES.SEND_SECRET_CODE: {
        await emailJobService.sendActivationEmail(
          job.data as SendSecretCodeJobData,
        );
        break;
      }
    }
  }
}
