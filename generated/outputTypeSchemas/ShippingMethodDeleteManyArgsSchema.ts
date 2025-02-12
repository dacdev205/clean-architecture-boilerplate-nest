import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShippingMethodWhereInputSchema } from '../inputTypeSchemas/ShippingMethodWhereInputSchema'

export const ShippingMethodDeleteManyArgsSchema: z.ZodType<Prisma.ShippingMethodDeleteManyArgs> = z.object({
  where: ShippingMethodWhereInputSchema.optional(),
}).strict() ;

export default ShippingMethodDeleteManyArgsSchema;
