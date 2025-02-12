import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumShippingTypeFilterSchema } from './EnumShippingTypeFilterSchema';
import { ShippingTypeSchema } from './ShippingTypeSchema';
import { DecimalFilterSchema } from './DecimalFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { OrderListRelationFilterSchema } from './OrderListRelationFilterSchema';

export const ShippingMethodWhereInputSchema: z.ZodType<Prisma.ShippingMethodWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ShippingMethodWhereInputSchema),z.lazy(() => ShippingMethodWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ShippingMethodWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ShippingMethodWhereInputSchema),z.lazy(() => ShippingMethodWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumShippingTypeFilterSchema),z.lazy(() => ShippingTypeSchema) ]).optional(),
  fee: z.union([ z.lazy(() => DecimalFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict();

export default ShippingMethodWhereInputSchema;
