import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodWhereInputSchema } from './PaymentMethodWhereInputSchema';
import { PaymentMethodUpdateWithoutOrdersInputSchema } from './PaymentMethodUpdateWithoutOrdersInputSchema';
import { PaymentMethodUncheckedUpdateWithoutOrdersInputSchema } from './PaymentMethodUncheckedUpdateWithoutOrdersInputSchema';

export const PaymentMethodUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.PaymentMethodUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => PaymentMethodWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PaymentMethodUpdateWithoutOrdersInputSchema),z.lazy(() => PaymentMethodUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export default PaymentMethodUpdateToOneWithWhereWithoutOrdersInputSchema;
