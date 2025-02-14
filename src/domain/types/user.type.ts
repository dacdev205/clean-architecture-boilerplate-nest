import { Prisma } from '@prisma/client';

export const User = Prisma.validator<Prisma.UserFindFirstArgs>()({
  select: {
    id: true,
    last_name: true,
    first_name: true,
    phone: true,
    addresses: true,
    status: true,
    role: true,
    orders: true,
    carts: true,
    code_id: true,
    code_expiredAt: true,
    email: true,
    password: true,
    two_FA_enabled: true,
    created_at: true,
    updated_at: true,
  },
});

export type User = Prisma.UserGetPayload<typeof User>;
