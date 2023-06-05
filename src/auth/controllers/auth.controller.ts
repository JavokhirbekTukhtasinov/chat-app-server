import { Body, ClassSerializerInterceptor, Controller, Get, Inject, Post, UseInterceptors } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from '../auth';
import { CreateUserDto } from '../dtos/create-user-dto';
import { IUserService } from 'src/user/user';
import { plainToClass } from 'class-transformer';
import { UserLoginDto } from '../dtos/login-user-dto';

@Controller(Routes.AUTH)
export class AuthController {
    constructor(
        @Inject(Services.AUTH) authService: IAuthService,
        @Inject(Services.USERS) private userService: IUserService
    ) { }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post('register')
    registerUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto)
    }

    @Get('status')
    status() { }

    @Post('login')
    login(@Body() loginUser: UserLoginDto) {
        return this.userService.loginUser(loginUser)
    }

    @Post('logout')
    logout() { }
}
