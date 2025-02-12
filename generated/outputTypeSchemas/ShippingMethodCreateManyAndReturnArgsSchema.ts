import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShippingMethodCreateManyInputSchema } from '../inputTypeSchemas/ShippingMethodCreateManyInputSchema'

export const ShippingMethodCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ShippingMethodCreateManyAndReturnArgs> = z.object({
  data: z.union([ ShippingMethodCreateManyInputSchema,ShippingMethodCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ShippingMethodCreateManyAndReturnArgsSchema;
