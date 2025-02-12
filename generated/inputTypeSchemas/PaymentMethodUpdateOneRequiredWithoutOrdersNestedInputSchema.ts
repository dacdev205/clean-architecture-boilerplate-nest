import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentMethodCreateWithoutOrdersInputSchema } from './PaymentMethodCreateWithoutOrdersInputSchema';
import { PaymentMethodUncheckedCreateWithoutOrdersInputSchema } from './PaymentMethodUncheckedCreateWithoutOrdersInputSchema';
import { PaymentMethodCreateOrConnectWithoutOrdersInputSchema } from './PaymentMethodCreateOrConnectWithoutOrdersInputSchema';
import { PaymentMethodUpsertWithoutOrdersInputSchema } from './PaymentMethodUpsertWithoutOrdersInputSchema';
import { PaymentMethodWhereUniqueInputSchema } from './PaymentMethodWhereUniqueInputSchema';
import { PaymentMethodUpdateToOneWithWhereWithoutOrdersInputSchema } from './PaymentMethodUpdateToOneWithWhereWithoutOrdersInputSchema';
import { PaymentMethodUpdateWithoutOrdersInputSchema } from './PaymentMethodUpdateWithoutOrdersInputSchema';
import { PaymentMethodUncheckedUpdateWithoutOrdersInputSchema } from './PaymentMethodUncheckedUpdateWithoutOrdersInputSchema';

export const PaymentMethodUpdateOneRequiredWithoutOrdersNestedInputSchema: z.ZodType<Prisma.PaymentMethodUpdateOneRequiredWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentMethodCreateWithoutOrdersInputSchema),z.lazy(() => PaymentMethodUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PaymentMethodCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => PaymentMethodUpsertWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => PaymentMethodWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PaymentMethodUpdateToOneWithWhereWithoutOrdersInputSchema),z.lazy(() => PaymentMethodUpdateWithoutOrdersInputSchema),z.lazy(() => PaymentMethodUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export default PaymentMethodUpdateOneRequiredWithoutOrdersNestedInputSchema;
