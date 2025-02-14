import { Strategy } from 'passport-local';
import { ValidateCustomerLoginUseCase } from '~/application/auth/use-case/validate-customer-login.use-case';
import { STRATEGY } from '~/common/constants/strategy.constants';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class LocalCustomerStrategy extends PassportStrategy(
  Strategy,
  STRATEGY.LOCAL_CUSTOMER,
) {
  constructor(
    private readonly _validateCustomerLoginUseCase: ValidateCustomerLoginUseCase,
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this._validateCustomerLoginUseCase.execute(
      email,
      password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
