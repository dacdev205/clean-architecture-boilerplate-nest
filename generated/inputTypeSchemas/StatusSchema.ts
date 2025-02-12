import { z } from 'zod';

export const StatusSchema = z.enum(['Active','Blocked']);

export type StatusType = `${z.infer<typeof StatusSchema>}`

export default StatusSchema;
