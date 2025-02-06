import dayjs from 'dayjs';
import { VerifyAccountDto } from 'src/application/dtos/auth';
import {
  ACCOUNT_IS_ACTIVED,
  CODE_HAS_EXPIRED,
  CODE_IS_VALID,
} from 'src/content/errors/code.error';
import { USER_NOT_FOUND } from 'src/content/errors/user.error';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserUseCase } from '../users/delete-user.use-case';
import { FindUserByEmailUseCase } from '../users/find-user-by-email.use-case';

@Injectable()
export class VerifyAccountUseCase {
  constructor(
    private readonly _findUserByEmailUseCase: FindUserByEmailUseCase,
    private readonly _updateUserUseCase: UpdateUserUseCase,
  ) {}
  async verifyAccount(verifyAccountDto: VerifyAccountDto): Promise<any> {
    const user = await this._findUserByEmailUseCase.findOneByEmail(
      verifyAccountDto.email,
    );

    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    if (user.isActive === true) {
      throw new BadRequestException(ACCOUNT_IS_ACTIVED);
    }
    if (verifyAccountDto.code_id !== user.codeId) {
      throw new BadRequestException(CODE_IS_VALID);
    }
    const isBeforeCheck = dayjs().isBefore(user.codeExpiredAt);

    if (!isBeforeCheck) {
      throw new BadRequestException(CODE_HAS_EXPIRED);
    }
    return await this._updateUserUseCase.updateUser(user.id, {
      isActive: true,
    });
  }
}
