import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserProfileResponseDto } from 'src/interfaces/dtos/user-profile.dto';
import { STRATEGY } from '~/common/constants/strategy.constants';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { GetUserByIdUseCase } from './../../../../../application/customer/use-case/get-user-by-id.use.case';

@Injectable()
export class JwtCustomerStrategy extends PassportStrategy(
  Strategy,
  STRATEGY.JWT_CUSTOMER,
) {
  constructor(private readonly _getUserByIdUseCase: GetUserByIdUseCase) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_CUSTOMER_SECRET_KEY as string,
    });
  }

  async validate(payload: any): Promise<UserProfileResponseDto> {
    const id = payload.sub;

    const user = await this._getUserByIdUseCase.execute(id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user as UserProfileResponseDto;
  }
}
