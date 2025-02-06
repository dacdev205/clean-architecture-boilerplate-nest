import { ChangePasswordDto } from 'src/application/dtos/auth';
import { HashService } from 'src/application/services/hash.service';
import { WRONG_PASSWORD } from 'src/content/errors/password.error';
import { USER_NOT_FOUND } from 'src/content/errors/user.error';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserUseCase } from '../users/delete-user.use-case';
import { FindUserByEmailUseCase } from '../users/find-user-by-email.use-case';

@Injectable()
export class ChangePasswordUseCase {
  constructor(
    private readonly _findUserByEmailUseCase: FindUserByEmailUseCase,
    private readonly _updateUserUseCase: UpdateUserUseCase,

    private readonly _hashService: HashService,
  ) {}
  async changePassword(changePasswordDto: ChangePasswordDto): Promise<any> {
    const user = await this._findUserByEmailUseCase.findOneByEmail(
      changePasswordDto.email,
    );
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    const isMatching = await this._hashService.comparePassword(
      changePasswordDto.old_password,
      user.password,
    );
    if (!isMatching) {
      throw new BadRequestException(WRONG_PASSWORD);
    }
    const new_password = await this._hashService.hashPassword(
      changePasswordDto.new_password,
    );
    const data = {
      password: new_password,
    };
    return await this._updateUserUseCase.updateUser(user.id, data);
  }
}
