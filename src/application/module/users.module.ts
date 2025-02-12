import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users/users.controller';
import { UserRepository } from '../repositories/users.repositories';
import { CreateUserUseCase } from '../use-cases/users/create-user.use-case';
import { UpdateUserUseCase } from '../use-cases/users/delete-user.use-case';
import { FindAllUsersUseCase } from '../use-cases/users/find-all-user.use-case';
import { FindUserByEmailUseCase } from '../use-cases/users/find-user-by-email.use-case';
import { FindUserByIdUseCase } from '../use-cases/users/find-user-by-id.use-case';
import { FindUserByPhoneUseCase } from '../use-cases/users/find-user-by-phone.use-case';
import { DeleteUserUseCase } from '../use-cases/users/update-user.use-case';
import { HashService } from '../utils/hash.service';

@Module({
  controllers: [UsersController],
  providers: [
    UserRepository,
    HashService,
    CreateUserUseCase,
    DeleteUserUseCase,
    FindAllUsersUseCase,
    FindUserByPhoneUseCase,
    UpdateUserUseCase,
    FindUserByEmailUseCase,
    FindUserByIdUseCase,
  ],
  exports: [
    UserRepository,
    HashService,
    CreateUserUseCase,
    DeleteUserUseCase,
    FindAllUsersUseCase,
    FindUserByPhoneUseCase,
    UpdateUserUseCase,
    FindUserByEmailUseCase,
    FindUserByIdUseCase,
  ],
})
export class UsersModule {}
