import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserUseCase } from '~/application/customer/use-case/create-user.use-case';
import { HashService } from '~/application/utils/hash.service';
import { JWT_TOKEN } from '~/common/constants/jwt.constants';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {
  SignUpCustomerUseCaseDto,
  SignUpCustomerUseCaseResultDto,
} from '../dtos/sign-up-customer.dto';

@Injectable()
export class SignUpCustomerUseCase {
  constructor(
    private readonly _hashService: HashService,
    private readonly _createUserUseCase: CreateUserUseCase,
    private readonly _jwtService: JwtService,
    private readonly _configService: ConfigService,
  ) {}
  async execute(
    data: SignUpCustomerUseCaseDto,
  ): Promise<SignUpCustomerUseCaseResultDto> {
    const { email, password, first_name, last_name, phone } = data;
    const hashedPassword = await this._hashService.hashPassword(password);
    const user = await this._createUserUseCase.execute({
      email,
      password: hashedPassword,
      first_name,
      last_name,
      code_id: uuidv4(),
      code_expiredAt: dayjs().add(1, 'day').toDate(),
      phone,
    });
    const payload = {
      sub: user.id,
      username: user.last_name,
      role: user.role,
    };
    return {
      access_token: await this._jwtService.signAsync(payload, {
        secret: this._configService.get<string>('JWT_CUSTOMER_SECRET_KEY'),
        expiresIn: JWT_TOKEN.ACCESS_TOKEN_EXPIRES_IN,
      }),
      refresh_token: await this._jwtService.signAsync(payload, {
        secret: this._configService.get<string>('JWT_CUSTOMER_SECRET_KEY'),
        expiresIn: JWT_TOKEN.REFRESH_TOKEN_EXPIRES_IN,
      }),
    };
  }
}
