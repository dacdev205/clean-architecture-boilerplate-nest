import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodCreateWithoutOrdersInputSchema } from './PaymentMethodCreateWithoutOrdersInputSchema';
import { PaymentMethodUncheckedCreateWithoutOrdersInputSchema } from './PaymentMethodUncheckedCreateWithoutOrdersInputSchema';
import { PaymentMethodCreateOrConnectWithoutOrdersInputSchema } from './PaymentMethodCreateOrConnectWithoutOrdersInputSchema';
import { PaymentMethodWhereUniqueInputSchema } from './PaymentMethodWhereUniqueInputSchema';

export const PaymentMethodCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.PaymentMethodCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => PaymentMethodCreateWithoutOrdersInputSchema),z.lazy(() => PaymentMethodUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PaymentMethodCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => PaymentMethodWhereUniqueInputSchema).optional()
}).strict();

export default PaymentMethodCreateNestedOneWithoutOrdersInputSchema;
