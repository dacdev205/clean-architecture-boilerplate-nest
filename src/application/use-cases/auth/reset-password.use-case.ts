import dayjs from 'dayjs';
import { ResetPassDto } from 'src/application/dtos/auth';
import { HashService } from 'src/application/services/hash.service';
import { CODE_HAS_EXPIRED, CODE_IS_VALID } from 'src/content/errors/code.error';
import { USER_NOT_FOUND } from 'src/content/errors/user.error';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserUseCase } from './../users/delete-user.use-case';
import { FindUserByEmailUseCase } from './../users/find-user-by-email.use-case';

@Injectable()
export class ResetPassword {
  constructor(
    private readonly hashService: HashService,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly findUserByEmailUseCase: FindUserByEmailUseCase,
  ) {}
  async resetPassword(resetPassDto: ResetPassDto): Promise<any> {
    const user = await this.findUserByEmailUseCase.findOneByEmail(
      resetPassDto.email,
    );
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    if (resetPassDto.code_id !== user.codeId) {
      throw new BadRequestException(CODE_IS_VALID);
    }
    const isBeforeCheck = dayjs().isBefore(user.codeExpiredAt);

    if (!isBeforeCheck) {
      throw new BadRequestException(CODE_HAS_EXPIRED);
    }
    const hashed_password = await this.hashService.hashPassword(
      resetPassDto.new_password,
    );
    const data = {
      password: hashed_password,
    };
    return await this.updateUserUseCase.updateUser(user.id, data);
  }
}
