import { QueueJobRepository } from '~/domains/repositories/queue-job.repository';
import { Injectable } from '@nestjs/common';
import { QueuesService } from '../queues.service';

@Injectable()
export class BullQueueJobRepository implements QueueJobRepository {
  constructor(private readonly _queueServce: QueuesService) {}
  async addQueueJob(
    queueName: string,
    processName: string,
    payload: Record<any, any>,
  ): Promise<any> {
    const queue = await this._queueServce.getReadyQueue(queueName);
    if (!queue) {
      throw new Error(`Queue ${queueName} is not ready.`);
    }
    const { id } = await queue.add(processName, payload);
    if (!id) throw new Error();
    return id;
  }
}
