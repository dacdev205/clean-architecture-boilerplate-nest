import dayjs from 'dayjs';
import { ACCOUNT_IS_ACTIVED } from 'src/content/errors/code.error';
import { USER_NOT_FOUND } from 'src/content/errors/user.error';
import { v4 as uuidv4 } from 'uuid';
import { ActivationJobData } from '~/common/interfaces/activation-job-data.interface';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserUseCase } from '../users/delete-user.use-case';
import { FindUserByEmailUseCase } from '../users/find-user-by-email.use-case';
import { AuthQueue } from './auth.queue';

@Injectable()
export class RetryActiveUseCase {
  constructor(
    private readonly _authQueue: AuthQueue,
    private readonly _findUserByEmailUseCase: FindUserByEmailUseCase,
    private readonly _updateUserUseCase: UpdateUserUseCase,
  ) {}
  async retryActive(email: string): Promise<any> {
    const user = await this._findUserByEmailUseCase.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    if (user.isActive) {
      throw new BadRequestException(ACCOUNT_IS_ACTIVED);
    }
    const data = {
      codeId: uuidv4(),
      codeExpiredAt: dayjs().add(1, 'days').toDate(),
    };
    await this._updateUserUseCase.updateUser(user.id, data);
    const activationJobData: ActivationJobData = {
      to: email,
      activationCode: data.codeId,
    };
    await this._authQueue.addSendActiveCodeJob(activationJobData);
  }
}
