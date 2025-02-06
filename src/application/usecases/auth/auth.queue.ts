import { QueuesService } from 'src/infrastructure/queues/queues.service';
import { ActivationJobData } from '~/common/interfaces/activation-job-data.interface';
import { Injectable } from '@nestjs/common';
import { ResetPassJobData } from '../../../common/interfaces/reset-pass-job-data.interface';

@Injectable()
export class AuthQueue {
  constructor(private readonly _queueService: QueuesService) {}
  async addSendActiveCodeJob(
    activationJobData: ActivationJobData,
  ): Promise<void> {
    await this._queueService.addSendActiveCodeJob(activationJobData);
  }
  async addSendResetPassCodeJob(
    resetPassJobData: ResetPassJobData,
  ): Promise<void> {
    await this._queueService.addSendResetPassCodeJob(resetPassJobData);
  }
}
