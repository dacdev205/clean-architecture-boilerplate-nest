import { Strategy } from 'passport-local';
import { ValidateAdminLoginUseCase } from '~/application/auth/use-case/validate-admin-login.use-case';
import { STRATEGY } from '~/common/constants/strategy.constants';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class LocalAdminStrategy extends PassportStrategy(
  Strategy,
  STRATEGY.LOCAL_ADMIN,
) {
  constructor(
    private readonly _validateAdminUseCase: ValidateAdminLoginUseCase,
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this._validateAdminUseCase.execute(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
