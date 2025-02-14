import { Prisma } from '@prisma/client';
import { User } from '../types/user.type';
export interface UserRepository {
  // findFirst(args: Prisma.AddressFindFirstArgs): Promise<User | null>;
  findOne(args: Prisma.UserFindUniqueArgs): Promise<User | null>;
  // findMany(args: Prisma.UserFindManyArgs): Promise<User[]>;
  create(args: Prisma.UserCreateArgs): Promise<User>;
  // update(args: Prisma.UserUpdateArgs): Promise<User>;
  // delete(args: Prisma.UserDeleteArgs): Promise<User>;
}

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');
