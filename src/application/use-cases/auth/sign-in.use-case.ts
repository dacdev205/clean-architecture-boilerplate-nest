import { jwtConstants } from 'src/common/constants/jwtConstants';
import { AuthResponse } from '~/application/responses/auth-response';
import { UserProfile } from '~/application/responses/user-profile-response';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignInUseCase {
  constructor(private jwtService: JwtService) {}
  async signIn(user: UserProfile): Promise<AuthResponse> {
    const payload = {
      sub: user.id,
      username: user.lastName,
      roles: user.roles,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: jwtConstants.REFRESH_TOKEN_EXPIRES_IN,
      }),
    };
  }
}
