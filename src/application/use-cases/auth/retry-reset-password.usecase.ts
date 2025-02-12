import dayjs from 'dayjs';
import { USER_NOT_FOUND } from 'src/content/errors/user.error';
import { v4 as uuidv4 } from 'uuid';
import { ResetPassJobData } from '~/common/interfaces/reset-pass-job-data.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserUseCase } from '../users/delete-user.use-case';
import { FindUserByEmailUseCase } from '../users/find-user-by-email.use-case';
import { AuthQueue } from './auth.queue';

@Injectable()
export class RetryResetPassword {
  constructor(
    private readonly _findUserByEmailUseCase: FindUserByEmailUseCase,
    private readonly _updateUserUseCase: UpdateUserUseCase,
    private readonly _authQueue: AuthQueue,
  ) {}
  async retryResetPassword(email: string): Promise<any> {
    const user = await this._findUserByEmailUseCase.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    const data = {
      codeId: uuidv4(),
      codeExpiredAt: dayjs().add(1, 'days').toDate(),
    };
    await this._updateUserUseCase.updateUser(user.id, data);
    const resetJobdata: ResetPassJobData = {
      to: email,
      resetCode: data.codeId,
    };
    await this._authQueue.addSendResetPassCodeJob(resetJobdata);
  }
}
