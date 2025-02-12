import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumShippingTypeWithAggregatesFilterSchema } from './EnumShippingTypeWithAggregatesFilterSchema';
import { ShippingTypeSchema } from './ShippingTypeSchema';
import { DecimalWithAggregatesFilterSchema } from './DecimalWithAggregatesFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ShippingMethodScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ShippingMethodScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ShippingMethodScalarWhereWithAggregatesInputSchema),z.lazy(() => ShippingMethodScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ShippingMethodScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ShippingMethodScalarWhereWithAggregatesInputSchema),z.lazy(() => ShippingMethodScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumShippingTypeWithAggregatesFilterSchema),z.lazy(() => ShippingTypeSchema) ]).optional(),
  fee: z.union([ z.lazy(() => DecimalWithAggregatesFilterSchema),z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ShippingMethodScalarWhereWithAggregatesInputSchema;
