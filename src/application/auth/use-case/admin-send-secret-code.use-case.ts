import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { AuthQueue } from '~/application/queue-job/auth.queue';
import { SendSecretCodeJobData } from '~/common/interfaces/activation-job-data.interface';
import { ACCOUNT_IS_ACTIVED } from '~/content/errors/code.error';
import { USER_NOT_FOUND } from '~/content/errors/user.error';
import {
  USER_REPOSITORY,
  UserRepository,
} from '~/domains/repositories/user.repository';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
@Injectable()
export class AdminSendScretCodeActiveAccountUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly _userRepository: UserRepository,
    private readonly _authQueue: AuthQueue,
  ) {}
  async execute(email: string): Promise<void> {
    const user = await this._userRepository.findOne({
      where: { email: email },
    });
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    if (user.status === 'Active') {
      throw new BadRequestException(ACCOUNT_IS_ACTIVED);
    }
    const updateData = {
      code_id: uuidv4(),
      code_expiredAt: dayjs().add(1, 'day').toDate(),
    };
    await this._userRepository.update({
      where: { id: user.id },
      data: updateData,
    });
    const sendCodeJobData: SendSecretCodeJobData = {
      to: email,
      secretCode: updateData.code_id as string,
      codeExpried: updateData.code_expiredAt,
    };
    await this._authQueue.sendSecretCodeJob(sendCodeJobData);
  }
}
