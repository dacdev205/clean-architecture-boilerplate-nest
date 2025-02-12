import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductCreateWithoutCartItemInputSchema } from './ProductCreateWithoutCartItemInputSchema';
import { ProductUncheckedCreateWithoutCartItemInputSchema } from './ProductUncheckedCreateWithoutCartItemInputSchema';
import { ProductCreateOrConnectWithoutCartItemInputSchema } from './ProductCreateOrConnectWithoutCartItemInputSchema';
import { ProductUpsertWithoutCartItemInputSchema } from './ProductUpsertWithoutCartItemInputSchema';
import { ProductWhereUniqueInputSchema } from './ProductWhereUniqueInputSchema';
import { ProductUpdateToOneWithWhereWithoutCartItemInputSchema } from './ProductUpdateToOneWithWhereWithoutCartItemInputSchema';
import { ProductUpdateWithoutCartItemInputSchema } from './ProductUpdateWithoutCartItemInputSchema';
import { ProductUncheckedUpdateWithoutCartItemInputSchema } from './ProductUncheckedUpdateWithoutCartItemInputSchema';

export const ProductUpdateOneRequiredWithoutCartItemNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutCartItemNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCartItemInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCartItemInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutCartItemInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutCartItemInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutCartItemInputSchema),z.lazy(() => ProductUpdateWithoutCartItemInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCartItemInputSchema) ]).optional(),
}).strict();

export default ProductUpdateOneRequiredWithoutCartItemNestedInputSchema;
