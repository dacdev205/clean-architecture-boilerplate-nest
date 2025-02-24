import { BadRequestException, Inject, NotFoundException } from '@nestjs/common';
import dayjs from 'dayjs';
import { GetUserByEmailUseCase } from '~/application/user/use-case/get-user-by-email.use-case';
import { GenerateTokenService } from '~/application/utils/gen-token.service';
import {
  ACCOUNT_IS_ACTIVED,
  CODE_HAS_EXPIRED,
  CODE_IS_VALID,
} from '~/content/errors/code.error';
import { USER_NOT_FOUND } from '~/content/errors/user.error';
import {
  USER_REPOSITORY,
  UserRepository,
} from '~/domains/repositories/user.repository';

export class ActiveCustomerAccountUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly _userRepository: UserRepository,
    private readonly _getUserByEmailUseCase: GetUserByEmailUseCase,
    private readonly _generateTokenService: GenerateTokenService,
  ) {}
  async execute(token: string) {
    const decodedToken = await this._generateTokenService.decodeToken(token);
    if (!decodedToken) {
      throw new Error('Invalid token');
    }
    const user = await this._getUserByEmailUseCase.execute(decodedToken.email);
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    if (!dayjs().isBefore(decodedToken.codeExpried)) {
      throw new BadRequestException(CODE_HAS_EXPIRED);
    }
    if (user.status === 'Active') {
      throw new BadRequestException(ACCOUNT_IS_ACTIVED);
    }
    if (user.code_id !== decodedToken.secretCode) {
      throw new BadRequestException(CODE_IS_VALID);
    }
    return await this._userRepository.update({
      where: { id: user.id },
      data: { status: 'Active' },
    });
  }
}
