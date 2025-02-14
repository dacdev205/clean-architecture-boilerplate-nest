import { UserProfileResponseDto } from '~/application/auth/dtos/user-profile.dto';
import { GetUserByEmailUseCase } from '~/application/user/use-case/get-user-by-email.use-case';
import { HashService } from '~/application/utils/hash.service';
import { WRONG_PASSWORD } from '~/content/errors/password.error';
import { USER_NOT_FOUND } from '~/content/errors/user.error';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ValidateAdminLoginUseCase {
  constructor(
    private readonly _hashService: HashService,
    private readonly _getUseByEmailUseCase: GetUserByEmailUseCase,
  ) {}
  async execute(
    email: string,
    password: string,
  ): Promise<UserProfileResponseDto> {
    const user = await this._getUseByEmailUseCase.execute(email);

    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    const isMatching = await this._hashService.comparePassword(
      password,
      user.password,
    );
    if (!isMatching) {
      throw new UnauthorizedException(WRONG_PASSWORD);
    }

    return user as UserProfileResponseDto;
  }
}
