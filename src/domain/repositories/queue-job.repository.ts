export interface QueueJobRepository {
  addQueueJob(
    queueName: string,
    processName: string,
    payload: Record<any, any>,
  ): Promise<void>;
}

export const QUEUE_JOB_REPOSITORY = Symbol('QUEUE_JOB_REPOSITORY');
