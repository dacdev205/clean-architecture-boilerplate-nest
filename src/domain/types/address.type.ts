import { Prisma } from '@prisma/client';

export const Address = Prisma.validator<Prisma.AddressFindFirstArgs>()({
  select: {
    id: true,
    name: true,
    phone: true,
    city: true,
    district: true,
    ward: true,
    street: true,
    deleted_at: true,
    created_at: true,
    updated_at: true,
    user_id: true,
  },
});
export type Address = Prisma.AddressGetPayload<typeof Address>;
