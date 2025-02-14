import { STRATEGY } from '~/common/constants/strategy.constants';
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAdminGuard extends AuthGuard(STRATEGY.JWT_ADMIN) {}
