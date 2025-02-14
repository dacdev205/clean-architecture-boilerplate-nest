import { z } from 'zod';

export const RoleSchema = z.enum(['Admin','Affiliate','Customer']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema;
