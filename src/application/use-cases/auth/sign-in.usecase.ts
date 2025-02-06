import { AuthResponse } from '~/application/responses/auth-response';
import { UserProfile } from '~/application/responses/user-profile-response';
import { jwtConstants } from '~/common/constants/jwt.constants';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignInUseCase {
  constructor(private readonly _jwtService: JwtService) {}
  async signIn(user: UserProfile): Promise<AuthResponse> {
    const payload = {
      sub: user.id,
      username: user.lastName,
      roles: user.roles,
    };

    return {
      accessToken: await this._jwtService.signAsync(payload, {
        expiresIn: jwtConstants.ACCESS_TOKEN_EXPIRES_IN,
      }),
      refreshToken: await this._jwtService.signAsync(payload, {
        expiresIn: jwtConstants.REFRESH_TOKEN_EXPIRES_IN,
      }),
    };
  }
}
