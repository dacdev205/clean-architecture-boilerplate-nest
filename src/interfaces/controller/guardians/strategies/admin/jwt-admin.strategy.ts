// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { UserProfile } from '~/application/responses/user-profile-response';
// import { FindUserByIdUseCase } from '~/application/use-cases/users/find-user-by-id.use-case';
// import { STRATEGY } from '~/common/constants/strategy.constants';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';

// @Injectable()
// export class JwtAdminStrategy extends PassportStrategy(
//   Strategy,
//   STRATEGY.JWT_ADMIN,
// ) {
//   constructor(private readonly _findUserByIdUseCase: FindUserByIdUseCase) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: process.env.JWT_ADMIN_SECRET_KEY as string,
//     });
//   }

//   async validate(payload: any): Promise<UserProfile> {
//     const id = payload.sub;

//     const user = await this._findUserByIdUseCase.execute(id);
//     if (!user) {
//       throw new UnauthorizedException('hehe');
//     }
//     return user as UserProfile;
//   }
// }
