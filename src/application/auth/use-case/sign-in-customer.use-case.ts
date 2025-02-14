import { GetUserByEmailUseCase } from '~/application/user/use-case/get-user-by-email.use-case';
import { JWT_TOKEN } from '~/common/constants/jwt.constants';
import { USER_NOT_FOUND } from '~/content/errors/user.error';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthResultDto } from '../dtos/auth-response.dto';
import { SignInCustomerUseCaseDto } from '../dtos/sign-in-customer.dto';

@Injectable()
export class SignInCustomerUseCase {
  constructor(
    private readonly _jwtService: JwtService,
    private readonly _configService: ConfigService,
    private readonly _getUserByEmailUseCase: GetUserByEmailUseCase,
  ) {}

  async execute(data: SignInCustomerUseCaseDto): Promise<AuthResultDto> {
    const user = await this._getUserByEmailUseCase.execute(data.email);
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
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
