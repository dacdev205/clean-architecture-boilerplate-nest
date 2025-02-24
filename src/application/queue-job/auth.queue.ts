import { SendSecretCodeJobData } from '~/common/interfaces/activation-job-data.interface';
import {
  JOB_NAMES,
  QUEUE_NAMES,
} from '~/infrastructure/queues/constants/queue.constants';
import { Inject, Injectable } from '@nestjs/common';
import {
  QUEUE_JOB_REPOSITORY,
  QueueJobRepository,
} from '~/domains/repositories/queue-job.repository';

@Injectable()
export class AuthQueue {
  constructor(
    @Inject(QUEUE_JOB_REPOSITORY)
    private readonly _queueJobRepository: QueueJobRepository,
  ) {}
  async sendSecretCodeJob(data: SendSecretCodeJobData): Promise<void> {
    await this._queueJobRepository.addQueueJob(
      QUEUE_NAMES.AUTH_QUEUE,
      JOB_NAMES.SEND_SECRET_CODE,
      data,
    );
  }
}
