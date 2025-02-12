import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductCreateWithoutCartItemInputSchema } from './ProductCreateWithoutCartItemInputSchema';
import { ProductUncheckedCreateWithoutCartItemInputSchema } from './ProductUncheckedCreateWithoutCartItemInputSchema';
import { ProductCreateOrConnectWithoutCartItemInputSchema } from './ProductCreateOrConnectWithoutCartItemInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';

export const ProductCreateNestedOneWithoutCartItemInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutCartItemInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCartItemInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCartItemInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutCartItemInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export default ProductCreateNestedOneWithoutCartItemInputSchema;
