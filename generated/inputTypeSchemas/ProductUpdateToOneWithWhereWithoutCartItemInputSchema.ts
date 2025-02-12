import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { ProductUpdateWithoutCartItemInputSchema } from './ProductUpdateWithoutCartItemInputSchema';
import { ProductUncheckedUpdateWithoutCartItemInputSchema } from './ProductUncheckedUpdateWithoutCartItemInputSchema';

export const ProductUpdateToOneWithWhereWithoutCartItemInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutCartItemInput> = z.object({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutCartItemInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCartItemInputSchema) ]),
}).strict();

export default ProductUpdateToOneWithWhereWithoutCartItemInputSchema;
