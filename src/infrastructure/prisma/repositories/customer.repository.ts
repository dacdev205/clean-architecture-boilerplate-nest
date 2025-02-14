import { UserRepository } from 'src/domain/repositories/user.repository';
import { User } from 'src/domain/types/user.type';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaCustomerRepository implements UserRepository {
  constructor(private readonly _prisma: PrismaService) {}
  create(args: Prisma.UserCreateArgs): Promise<User> {
    return this._prisma.user.create({
      ...args,
      include: {
        addresses: true,
        carts: true,
        orders: true,
      },
    });
  }
  findOne(args: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return this._prisma.user.findUnique({
      ...args,
      include: {
        addresses: true,
        carts: true,
        orders: true,
      },
    });
  }
  async checkEmail(args: Prisma.UserFindUniqueArgs): Promise<boolean> {
    const user = await this._prisma.user.findUnique(args);
    return !!user;
  }
}
