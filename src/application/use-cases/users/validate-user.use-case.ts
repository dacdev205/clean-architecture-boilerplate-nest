import { UserProfile } from '~/application/responses/user-profile-response';
import { HashService } from '~/application/utils/hash.service';
import { WRONG_PASSWORD } from '~/content/errors/password.error';
import { AUTH_FAILED_LOGIN, USER_NOT_FOUND } from '~/content/errors/user.error';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { FindUserByEmailUseCase } from './find-user-by-email.use-case';

@Injectable()
export class ValidateUserUseCase {
  constructor(
    private readonly _hashService: HashService,
    private readonly _findUserByEmailUseCase: FindUserByEmailUseCase,
  ) {}
  async validateUser(email: string, password: string): Promise<UserProfile> {
    const user = await this._findUserByEmailUseCase.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    const isMatching = await this._hashService.comparePassword(
      password,
      user.password,
    );

    if (!isMatching) {
      throw new UnauthorizedException(WRONG_PASSWORD);
    } else if (user.isActive === false) {
      throw new ForbiddenException(AUTH_FAILED_LOGIN);
    }
    return user;
  }
}
