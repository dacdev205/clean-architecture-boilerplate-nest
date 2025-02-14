import { STRATEGY } from '~/common/constants/strategy.constants';
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalCustomerGuard extends AuthGuard(STRATEGY.LOCAL_CUSTOMER) {}
