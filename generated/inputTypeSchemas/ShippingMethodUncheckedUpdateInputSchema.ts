import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ShippingTypeSchema } from './ShippingTypeSchema';
import { EnumShippingTypeFieldUpdateOperationsInputSchema } from './EnumShippingTypeFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { OrderUncheckedUpdateManyWithoutShippingMethodNestedInputSchema } from './OrderUncheckedUpdateManyWithoutShippingMethodNestedInputSchema';

export const ShippingMethodUncheckedUpdateInputSchema: z.ZodType<Prisma.ShippingMethodUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ShippingTypeSchema),z.lazy(() => EnumShippingTypeFieldUpdateOperationsInputSchema) ]).optional(),
  fee: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutShippingMethodNestedInputSchema).optional()
}).strict();

export default ShippingMethodUncheckedUpdateInputSchema;
