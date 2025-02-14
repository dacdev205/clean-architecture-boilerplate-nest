import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserProfileResponseDto } from '~/application/auth/dtos/user-profile.dto';
import { GetUserByIdUseCase } from '~/application/user/use-case/get-user-by-id.use.case';
import { STRATEGY } from '~/common/constants/strategy.constants';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(
  Strategy,
  STRATEGY.JWT_ADMIN,
) {
  constructor(private readonly _getUserByIdUseCase: GetUserByIdUseCase) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ADMIN_SECRET_KEY as string,
    });
  }

  async validate(payload: any): Promise<UserProfileResponseDto> {
    const id = payload.sub;

    const user = await this._getUserByIdUseCase.execute(id);
    if (!user) {
      throw new UnauthorizedException('hehe');
    }
    return user as UserProfileResponseDto;
  }
}
