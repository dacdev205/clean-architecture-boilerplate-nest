import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodWhereUniqueInputSchema } from './PaymentMethodWhereUniqueInputSchema';
import { PaymentMethodCreateWithoutOrdersInputSchema } from './PaymentMethodCreateWithoutOrdersInputSchema';
import { PaymentMethodUncheckedCreateWithoutOrdersInputSchema } from './PaymentMethodUncheckedCreateWithoutOrdersInputSchema';

export const PaymentMethodCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.PaymentMethodCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => PaymentMethodWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentMethodCreateWithoutOrdersInputSchema),z.lazy(() => PaymentMethodUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export default PaymentMethodCreateOrConnectWithoutOrdersInputSchema;
