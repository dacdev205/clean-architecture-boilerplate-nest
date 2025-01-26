import { ChangePasswordDto } from 'src/application/dtos/auth';
import { HashService } from 'src/application/services/hash.service';
import { WRONG_PASSWORD } from 'src/content/errors/password.error';
import { USER_NOT_FOUND } from 'src/content/errors/user.error';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FindUserByEmailUseCase } from './../users/find-user-by-email.use-case';
import { UpdateUserUseCase } from '../users/delete-user.use-case';

@Injectable()
export class ChangePasswordUseCase {
  constructor(
    private readonly findUserByEmailUseCase: FindUserByEmailUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,

    private readonly hashService: HashService,
  ) {}
  async changePassword(changePasswordDto: ChangePasswordDto): Promise<any> {
    const user = await this.findUserByEmailUseCase.findOneByEmail(
      changePasswordDto.email,
    );
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    const isMatching = await this.hashService.compare_password(
      changePasswordDto.old_password,
      user.password,
    );
    if (!isMatching) {
      throw new BadRequestException(WRONG_PASSWORD);
    }
    const new_password = await this.hashService.hashPassword(
      changePasswordDto.new_password,
    );
    const data = {
      password: new_password,
    };
    return await this.updateUserUseCase.updateUser(user.id, data);
  }
}
