import {
  CustomerChangePasswordUseCaseDto,
  CustomerChangePasswordUseCaseResultDto,
} from '~/application/customer/dtos/customer-change-password.dto';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { HashService } from '~/application/utils/hash.service';
import { WRONG_PASSWORD } from '~/content/errors/password.error';
import { USER_NOT_FOUND } from '~/content/errors/user.error';
import {
  USER_REPOSITORY,
  UserRepository,
} from '~/domains/repositories/user.repository';

@Injectable()
export class CustomerChangePasswordUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly _userRepository: UserRepository,
    private readonly _hashService: HashService,
  ) {}
  async execute(
    data: CustomerChangePasswordUseCaseDto,
  ): Promise<CustomerChangePasswordUseCaseResultDto> {
    const { email, oldPassword, newPassword } = data;
    const user = await this._userRepository.findOne({
      where: { email },
    });
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }
    const isMatching = await this._hashService.comparePassword(
      oldPassword,
      user.password,
    );
    if (!isMatching) {
      throw new BadRequestException(WRONG_PASSWORD);
    }
    const hashedPassword = await this._hashService.hashPassword(newPassword);
    await this._userRepository.update({
      where: { email },
      data: { password: hashedPassword },
    });
    return user;
  }
}
