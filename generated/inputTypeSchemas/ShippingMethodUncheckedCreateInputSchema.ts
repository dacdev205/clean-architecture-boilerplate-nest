import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ShippingTypeSchema } from './ShippingTypeSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { OrderUncheckedCreateNestedManyWithoutShippingMethodInputSchema } from './OrderUncheckedCreateNestedManyWithoutShippingMethodInputSchema';

export const ShippingMethodUncheckedCreateInputSchema: z.ZodType<Prisma.ShippingMethodUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  type: z.lazy(() => ShippingTypeSchema).optional(),
  fee: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutShippingMethodInputSchema).optional()
}).strict();

export default ShippingMethodUncheckedCreateInputSchema;
