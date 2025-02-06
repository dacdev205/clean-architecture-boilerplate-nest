import { STRATEGY } from '~/common/constants/strategy.constants';
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard(STRATEGY.JWT) {}
