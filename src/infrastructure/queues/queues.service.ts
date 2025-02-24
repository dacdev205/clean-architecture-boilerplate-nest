import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { QUEUE_NAMES } from './constants/queue.constants';

@Injectable()
export class QueuesService {
  private readonly _queueMap = new Map<string, Queue>();
  constructor(
    @InjectQueue(QUEUE_NAMES.AUTH_QUEUE) private readonly _authQueue: Queue,
  ) {
    this._queueMap = new Map<string, Queue>([
      [QUEUE_NAMES.AUTH_QUEUE, this._authQueue],
    ]);
  }
  async getReadyQueue(queueName: string): Promise<Queue | undefined> {
    const queue = this._queueMap.get(queueName);
    if (!queue) {
      throw new Error(`Queue "${queueName}" not found.`);
    }
    await queue.waitUntilReady();
    return queue;
  }
}
