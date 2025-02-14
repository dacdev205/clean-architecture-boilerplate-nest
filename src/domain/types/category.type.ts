import { Prisma } from '@prisma/client';

export const CategoryRelation =
  Prisma.validator<Prisma.CategoryFindFirstArgs>()({
    include: {
      products: true,
    },
  });
export type Category = Prisma.CategoryGetPayload<typeof CategoryRelation>;
