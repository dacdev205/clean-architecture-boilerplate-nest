import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductUpdateWithoutCartItemInputSchema } from './ProductUpdateWithoutCartItemInputSchema';
import { ProductUncheckedUpdateWithoutCartItemInputSchema } from './ProductUncheckedUpdateWithoutCartItemInputSchema';
import { ProductCreateWithoutCartItemInputSchema } from './ProductCreateWithoutCartItemInputSchema';
import { ProductUncheckedCreateWithoutCartItemInputSchema } from './ProductUncheckedCreateWithoutCartItemInputSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';

export const ProductUpsertWithoutCartItemInputSchema: z.ZodType<Prisma.ProductUpsertWithoutCartItemInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutCartItemInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCartItemInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutCartItemInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCartItemInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export default ProductUpsertWithoutCartItemInputSchema;
