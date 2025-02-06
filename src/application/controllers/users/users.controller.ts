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
import { ROLES, User } from '@prisma/client';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { UserProfile } from '~/application/responses/user-profile-response';
import { CurrentUser } from 'src/common/decorators/req-user.decorators';
import { RolesGuard } from '../../guards/roles.guard';
import { Role } from 'src/common/enums/role.enum';
import { SignUpDto, SignUpSchema } from 'src/application/dtos/auth';
import { CreateUserUseCase } from '~/application/use-cases/users/create-user.use-case';
import { UpdateUserUseCase } from '~/application/use-cases/users/delete-user.use-case';
import { DeleteUserUseCase } from '~/application/use-cases/users/update-user.use-case';
import { FindAllUsersUseCase } from '~/application/use-cases/users/find-all-user.use-case';
@Controller('users')
export class UsersController {
  constructor(
    private readonly _createUserUseCase: CreateUserUseCase,
    private readonly _updateUserUseCase: UpdateUserUseCase,
    private readonly _deleteUserUseCase: DeleteUserUseCase,
    private readonly _findAllUsersUseCase: FindAllUsersUseCase,
  ) {}

  @Post('')
  @UsePipes(new ZodValidationPipe(SignUpSchema))
  async create(
    @Body()
    createUserDto: SignUpDto,
  ): Promise<User> {
    const user = await this._createUserUseCase.create(createUserDto);
    return user;
  }
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@CurrentUser() user: UserProfile): UserProfile {
    return user;
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    const user = await this._deleteUserUseCase.deleteUser(id);
    return user;
  }
  @Get()
  @UseGuards(new RolesGuard([Role.ADMIN]))
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<User[]> {
    const users = await this._findAllUsersUseCase.findAll();
    return users as User[];
  }
  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateData: any) {
    if (updateData.roles) {
      updateData.roles = ROLES.ADMIN;
    }
    return await this._updateUserUseCase.updateUser(id, updateData);
  }
}
