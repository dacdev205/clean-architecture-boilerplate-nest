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
import { CreateUserUseCase } from '~/application/customer/use-case/create-user.use-case';
import {
  CreateUserRequestDto,
  CreateUserRequestSchema,
  CreateUserResponseDto,
} from 'src/interfaces/dtos/create-user.dto';
import { JwtCustomerGuard } from '../guardians/guard/jwt-customer.guard';
import { CurrentUser } from '~/common/decorators/req-user.decorators';
import { UserProfileResponseDto } from 'src/interfaces/dtos/user-profile.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly _createUserUseCase: CreateUserUseCase) {}

  @Post('')
  @UsePipes(new ZodValidationPipe(CreateUserRequestSchema))
  async create(
    @Body()
    data: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    return await this._createUserUseCase.execute(data);
  }
  @Get('me')
  @UseGuards(JwtCustomerGuard)
  getProfile(
    @CurrentUser() user: UserProfileResponseDto,
  ): UserProfileResponseDto {
    return user as UserProfileResponseDto;
  }
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
