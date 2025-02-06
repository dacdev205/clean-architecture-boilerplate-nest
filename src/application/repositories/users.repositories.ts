import { PrismaService } from 'src/infrastructure/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly _prisma: PrismaService) {}
  async create(requestBody: Prisma.UserCreateArgs): Promise<User> {
    return this._prisma.user.create(requestBody);
  }
  async findAll(args?: Prisma.UserFindManyArgs): Promise<User[]> {
    return this._prisma.user.findMany(args);
  }
  async findOne(args?: Prisma.UserFindUniqueArgs): Promise<User> {
    return this._prisma.user.findFirst(args);
  }
  async findById(arg: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return this._prisma.user.findUnique(arg);
  }

  async delete(arg: Prisma.UserDeleteArgs): Promise<User> {
    return this._prisma.user.delete(arg);
  }
  async update(arg: Prisma.UserUpdateArgs): Promise<User> {
    return this._prisma.user.update(arg);
  }
}
