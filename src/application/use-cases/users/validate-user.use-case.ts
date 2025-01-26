import { UserProfile } from '~/application/responses/user-profile-response';
import { HashService } from '~/application/services/hash.service';
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
    private readonly hashService: HashService,
    private readonly findUserByEmailUseCase: FindUserByEmailUseCase,
  ) {}
  async validateUser(email: string, password: string): Promise<UserProfile> {
    const user = await this.findUserByEmailUseCase.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    const isMatching = await this.hashService.compare_password(
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
