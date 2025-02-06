import { UserRepository } from '~/application/repositories/users.repositories';
import { USER_NOT_FOUND } from '~/content/errors/user.error';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly _userRepository: UserRepository) {}
  async updateUser(id: string, updateData: Partial<User>): Promise<any> {
    const user = await this._userRepository.findById({ where: { id } });
    if (!user) {
      throw new BadRequestException(USER_NOT_FOUND);
    }
    await this._userRepository.update({
      where: { id },
      data: updateData,
    });
    return updateData;
  }
}
