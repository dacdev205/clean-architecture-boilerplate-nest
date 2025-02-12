import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AddressCreateManyUserInputSchema: z.ZodType<Prisma.AddressCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  phone: z.string(),
  city: z.string(),
  district: z.string(),
  ward: z.string(),
  street: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default AddressCreateManyUserInputSchema;
