import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { JOB_NAMES, QUEUE_NAMES } from '~/common/constants/queue.constants';
import { ActivationJobData } from '~/common/interfaces/activation-job-data.interface';
import { ResetPassJobData } from '~/common/interfaces/reset-pass-job-data.interface';

@Injectable()
export class QueuesService {
  constructor(
    @InjectQueue(QUEUE_NAMES.AUTH_QUEUE) private readonly _authQueue: Queue,
  ) {}
  async addSendActiveCodeJob(activationJobData: ActivationJobData) {
    await this._authQueue.add(
      JOB_NAMES.SEND_ACTIVATION_MAIL,
      activationJobData,
    );
  }
  async addSendResetPassCodeJob(resetPassJobData: ResetPassJobData) {
    await this._authQueue.add(
      JOB_NAMES.SEND_RESET_PASSWORD_MAIL,
      resetPassJobData,
    );
  }
}
