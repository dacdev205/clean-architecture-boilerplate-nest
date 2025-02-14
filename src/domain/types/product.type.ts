import { Prisma } from '@prisma/client';

export const Product = Prisma.validator<Prisma.ProductFindFirstArgs>()({
  select: {
    id: true,
    name: true,
    price: true,
    quantity: true,
    category_id: true,
    deleted_at: true,
    created_at: true,
    category: {
      select: {
        id: true,
        name: true,
      },
    },
  },
});
