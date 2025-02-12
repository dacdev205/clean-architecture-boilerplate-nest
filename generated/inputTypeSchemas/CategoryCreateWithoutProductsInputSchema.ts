import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CategoryCreateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateWithoutProductsInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();

export default CategoryCreateWithoutProductsInputSchema;
