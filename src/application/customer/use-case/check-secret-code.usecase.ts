import dayjs from 'dayjs';
import { GetUserByEmailUseCase } from '~/application/user/use-case/get-user-by-email.use-case';
import { CODE_HAS_EXPIRED } from '~/content/errors/code.error';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CheckSecretCodeUseCase {
  constructor(private readonly _getUserByEmailUseCase: GetUserByEmailUseCase) {}
  async validateCode(email: string, code: string): Promise<boolean> {
    const user = await this._getUserByEmailUseCase.execute(email);
    if (!user) return false;
    const isBeforeCheck = dayjs().isBefore(user.code_expiredAt);

    if (!isBeforeCheck) {
      throw new BadRequestException(CODE_HAS_EXPIRED);
    }
    if (user.code_id !== code) {
      return false;
    }
    return true;
  }
}
