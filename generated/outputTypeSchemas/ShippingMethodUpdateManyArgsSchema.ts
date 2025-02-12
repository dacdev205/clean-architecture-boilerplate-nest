import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ShippingMethodUpdateManyMutationInputSchema } from '../inputTypeSchemas/ShippingMethodUpdateManyMutationInputSchema'
import { ShippingMethodUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ShippingMethodUncheckedUpdateManyInputSchema'
import { ShippingMethodWhereInputSchema } from '../inputTypeSchemas/ShippingMethodWhereInputSchema'

export const ShippingMethodUpdateManyArgsSchema: z.ZodType<Prisma.ShippingMethodUpdateManyArgs> = z.object({
  data: z.union([ ShippingMethodUpdateManyMutationInputSchema,ShippingMethodUncheckedUpdateManyInputSchema ]),
  where: ShippingMethodWhereInputSchema.optional(),
}).strict() ;

export default ShippingMethodUpdateManyArgsSchema;
