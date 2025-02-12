import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductCreateWithoutCartItemInputSchema } from './ProductCreateWithoutCartItemInputSchema';
import { ProductUncheckedCreateWithoutCartItemInputSchema } from './ProductUncheckedCreateWithoutCartItemInputSchema';

export const ProductCreateOrConnectWithoutCartItemInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCartItemInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutCartItemInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCartItemInputSchema) ]),
}).strict();

export default ProductCreateOrConnectWithoutCartItemInputSchema;
