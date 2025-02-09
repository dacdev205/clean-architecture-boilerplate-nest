import { UserRepository } from '~/application/repositories/users.repositories';
import { USER_NOT_FOUND } from '~/content/errors/user.error';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly _userRepository: UserRepository) {}
  async deleteUser(id: string): Promise<User | null> {
    const user = await this._userRepository.delete({ where: { id } });
    if (!user) {
      throw new BadRequestException(USER_NOT_FOUND);
    }
    return user;
  }
}
