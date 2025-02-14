import { UserProfileResponseDto } from 'src/interfaces/dtos/user-profile.dto';
import { JWT_TOKEN } from '~/common/constants/jwt.constants';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthResultDto } from '../dtos/auth-response.dto';

@Injectable()
export class SignInCustomerUseCase {
  constructor(
    private readonly _jwtService: JwtService,
    private readonly _configService: ConfigService,
  ) {}

  async execute(user: UserProfileResponseDto): Promise<AuthResultDto> {
    const payload = {
      sub: user.id,
      username: user.last_name,
      role: user.role,
    };
    return {
      access_token: await this._jwtService.signAsync(payload, {
        secret: this._configService.get<string>('JWT_CUSTOMER_SECRET_KEY'),
        expiresIn: JWT_TOKEN.ACCESS_TOKEN_EXPIRES_IN,
      }),
      refresh_token: await this._jwtService.signAsync(payload, {
        secret: this._configService.get<string>('JWT_CUSTOMER_SECRET_KEY'),
        expiresIn: JWT_TOKEN.REFRESH_TOKEN_EXPIRES_IN,
      }),
    };
  }
}
