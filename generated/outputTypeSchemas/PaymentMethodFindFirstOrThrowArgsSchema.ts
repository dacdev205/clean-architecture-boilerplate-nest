import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentMethodIncludeSchema } from '../inputTypeSchemas/PaymentMethodIncludeSchema'
import { PaymentMethodWhereInputSchema } from '../inputTypeSchemas/PaymentMethodWhereInputSchema'
import { PaymentMethodOrderByWithRelationInputSchema } from '../inputTypeSchemas/PaymentMethodOrderByWithRelationInputSchema'
import { PaymentMethodWhereUniqueInputSchema } from '../inputTypeSchemas/PaymentMethodWhereUniqueInputSchema'
import { PaymentMethodScalarFieldEnumSchema } from '../inputTypeSchemas/PaymentMethodScalarFieldEnumSchema'
import { OrderFindManyArgsSchema } from "../outputTypeSchemas/OrderFindManyArgsSchema"
import { PaymentMethodCountOutputTypeArgsSchema } from "../outputTypeSchemas/PaymentMethodCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PaymentMethodSelectSchema: z.ZodType<Prisma.PaymentMethodSelect> = z.object({
  id: z.boolean().optional(),
  method: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PaymentMethodCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PaymentMethodFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PaymentMethodFindFirstOrThrowArgs> = z.object({
  select: PaymentMethodSelectSchema.optional(),
  include: z.lazy(() => PaymentMethodIncludeSchema).optional(),
  where: PaymentMethodWhereInputSchema.optional(),
  orderBy: z.union([ PaymentMethodOrderByWithRelationInputSchema.array(),PaymentMethodOrderByWithRelationInputSchema ]).optional(),
  cursor: PaymentMethodWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PaymentMethodScalarFieldEnumSchema,PaymentMethodScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PaymentMethodFindFirstOrThrowArgsSchema;
