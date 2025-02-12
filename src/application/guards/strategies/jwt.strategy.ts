import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserProfile } from '~/application/responses/user-profile-response';
import { FindUserByIdUseCase } from '~/application/use-cases/users/find-user-by-id.use-case';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _findUserByIdUseCase: FindUserByIdUseCase) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ACCESS_TOKEN_SECRET_KEY as string,
    });
  }

  async validate(payload: any): Promise<UserProfile> {
    const id = payload.sub;

    const user = await this._findUserByIdUseCase.findOneById(id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user as UserProfile;
  }
}
