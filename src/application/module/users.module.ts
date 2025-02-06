import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users/users.controller';
import { UserRepository } from '../repositories/users.repositories';
import { HashService } from '../services/hash.service';
import { CreateUserUseCase } from '../usecases/users/create-user.use-case';
import { UpdateUserUseCase } from '../usecases/users/delete-user.use-case';
import { FindAllUsersUseCase } from '../usecases/users/find-all-user.use-case';
import { FindUserByEmailUseCase } from '../usecases/users/find-user-by-email.use-case';
import { FindUserByIdUseCase } from '../usecases/users/find-user-by-id.use-case';
import { FindUserByPhoneUseCase } from '../usecases/users/find-user-by-phone.use-case';
import { DeleteUserUseCase } from '../usecases/users/update-user.use-case';

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
