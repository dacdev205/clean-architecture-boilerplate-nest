import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodUpdateWithoutOrdersInputSchema } from './PaymentMethodUpdateWithoutOrdersInputSchema';
import { PaymentMethodUncheckedUpdateWithoutOrdersInputSchema } from './PaymentMethodUncheckedUpdateWithoutOrdersInputSchema';
import { PaymentMethodCreateWithoutOrdersInputSchema } from './PaymentMethodCreateWithoutOrdersInputSchema';
import { PaymentMethodUncheckedCreateWithoutOrdersInputSchema } from './PaymentMethodUncheckedCreateWithoutOrdersInputSchema';
import { PaymentMethodWhereInputSchema } from './PaymentMethodWhereInputSchema';

export const PaymentMethodUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.PaymentMethodUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => PaymentMethodUpdateWithoutOrdersInputSchema),z.lazy(() => PaymentMethodUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentMethodCreateWithoutOrdersInputSchema),z.lazy(() => PaymentMethodUncheckedCreateWithoutOrdersInputSchema) ]),
  where: z.lazy(() => PaymentMethodWhereInputSchema).optional()
}).strict();

export default PaymentMethodUpsertWithoutOrdersInputSchema;
