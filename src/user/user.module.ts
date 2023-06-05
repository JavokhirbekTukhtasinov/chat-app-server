import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Services } from 'src/utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/utils/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [{
    provide: Services.USERS,
    useClass: UserService
  }],
  exports: [{
    provide: Services.USERS,
    useClass: UserService
  }],
})
export class UserModule { }
