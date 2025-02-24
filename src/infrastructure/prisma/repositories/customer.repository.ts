import { UserRepository } from 'src/domain/repositories/user.repository';
import { User } from 'src/domain/types/user.type';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly _prisma: PrismaService) {}
  async create(args: Prisma.UserCreateArgs): Promise<User> {
    return await this._prisma.user.create({
      ...args,
      include: {
        addresses: true,
        carts: true,
        orders: true,
      },
    });
  }
  async findOne(args: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return await this._prisma.user.findUnique({
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
  async update(args: Prisma.UserUpdateArgs): Promise<Partial<User>> {
    return await this._prisma.user.update(args);
  }
}
