import { z } from 'zod';

export const StatusSchema = z.enum(['Active','Blocked','Inactive']);

export type StatusType = `${z.infer<typeof StatusSchema>}`

export default StatusSchema;
