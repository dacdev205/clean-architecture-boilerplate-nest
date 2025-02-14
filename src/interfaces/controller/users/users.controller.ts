import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.schema';
import { CreateUserUseCase } from '~/application/user/use-case/create-user.use-case';
import {
  CreateUserRequestDto,
  CreateUserRequestSchema,
  CreateUserResponseDto,
} from 'src/interfaces/dtos/create-user.dto';
import { JwtCustomerGuard } from '../guardians/guard/jwt-customer.guard';
import { CurrentUser } from '~/common/decorators/req-user.decorators';
import { UserProfileResponseDto } from '~/application/auth/dtos/user-profile.dto';
import { UserAdapter } from 'src/interfaces/adapters/user.adapter';
import {
  EmailRequestDto,
  EmailRequestSchema,
} from 'src/interfaces/dtos/email.edto';

@Controller('users')
export class UsersController {
  constructor(private readonly _userAdapter: UserAdapter) {}

  @Post('')
  @UsePipes(new ZodValidationPipe(CreateUserRequestSchema))
  async create(
    @Body()
    data: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    return await this._userAdapter.create(data);
  }
  @Get('me')
  @UseGuards(JwtCustomerGuard)
  getProfile(
    @CurrentUser() user: UserProfileResponseDto,
  ): UserProfileResponseDto {
    return user as UserProfileResponseDto;
  }
  @Get('get-started')
  async getStarted(
    @Body(new ZodValidationPipe(EmailRequestSchema)) data: EmailRequestDto,
  ): Promise<boolean> {
    return await this._userAdapter.getStarted(data.email);
  }
  //
  // @Delete(':id')
  // async delete(@Param('id') id: string): Promise<User> {
  //   const user = await this._deleteUserUseCase.execute(id);
  //   return user as User;
  // }
  // @Get()
  // @UseGuards(new RolesGuard([ROLES.ADMIN]))
  // @UseGuards(JwtCustomerGuard)
  // async findAll(): Promise<User[]> {
  //   const users = await this._findAllUsersUseCase.execute();
  //   return users as User[];
  // }
  // @Put(':id')
  // async updateUser(@Param('id') id: string, @Body() updateData: any) {
  //   if (updateData.role) {
  //     updateData.role = ROLES.ADMIN;
  //   }
  //   return await this._updateUserUseCase.execute(id, updateData);
  // }
}
