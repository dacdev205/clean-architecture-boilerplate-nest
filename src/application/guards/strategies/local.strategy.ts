import { Strategy } from 'passport-local';
import { UserProfile } from '~/application/responses/user-profile-response';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ValidateUserUseCase } from '../../use-cases/users/validate-user.use-case';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _validateUserUseCase: ValidateUserUseCase) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<UserProfile> {
    const user = await this._validateUserUseCase.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user as UserProfile;
  }
}
