import { Prisma } from '@prisma/client';
import { Address } from '../types/address.type';

export interface AddressRepository {
  findFirst(args: Prisma.AddressFindFirstArgs): Promise<Address | null>;
  findMany(args: Prisma.AddressFindManyArgs): Promise<Address[]>;
  create(args: Prisma.AddressCreateArgs): Promise<Address>;
  update(args: Prisma.AddressUpdateArgs): Promise<Address>;
  delete(args: Prisma.AddressDeleteArgs): Promise<Address>;
}

export const ADDRESS_REPOSITORY = Symbol('ADDRESS_REPOSITORY');
