import { EMAIL_NOT_FOUND } from '~/content/errors/email.error';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CheckEmailExistedUseCase } from './check-email-existed.use-case';

@Injectable()
export class GetStartedUseCase {
  constructor(
    private readonly _checkEmailExistedUseCase: CheckEmailExistedUseCase,
  ) {}
  async excute(email: string) {
    const user = await this._checkEmailExistedUseCase.execute(email);
    if (!user) {
      throw new NotFoundException(EMAIL_NOT_FOUND);
    }
    return user;
  }
}
