import { Job } from 'bullmq';
import { JOB_NAMES, QUEUE_NAMES } from '~/common/constants/queue.constants';
import { ActivationJobData } from '~/common/interfaces/activation-job-data.interface';
import { ResetPassJobData } from '~/common/interfaces/reset-pass-job-data.interface';
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { LazyModuleLoader } from '@nestjs/core';
@Processor(QUEUE_NAMES.AUTH_QUEUE)
export class EmailProcessor extends WorkerHost {
  constructor(private readonly _lazyModuleLoader: LazyModuleLoader) {
    super();
  }
  async process(job: Job<any>): Promise<void> {
    const { EmailModule } = await import('../email/email.module');
    const moduleRef = this._lazyModuleLoader.load(() => EmailModule);
    const { EmailService } = await import('./email.service');
    const emailJobService = (await moduleRef).get(EmailService, {
      strict: false,
    });
    switch (job.name) {
      case JOB_NAMES.SEND_ACTIVATION_MAIL: {
        await emailJobService.sendActivationEmail(
          job.data as ActivationJobData,
        );
        break;
      }
      case JOB_NAMES.SEND_RESET_PASSWORD_MAIL: {
        await emailJobService.sendResetPassEmail(job.data as ResetPassJobData);
        break;
      }
    }
  }
}
