import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { Routes, Services } from 'src/utils/types';
import { IAuthService } from '../auth';
import { CreateUserDto } from '../dtos/create-user-dto';

@Controller(Routes.AUTH)
export class AuthController {
    constructor(
        @Inject(Services.AUTH) authService: IAuthService
    ) { }

    @Post('register')
    registerUser(@Body() createUserDto: CreateUserDto) {

        console.log(createUserDto)
    }

    @Get('status')
    status() { }

    @Post('login')
    login() { }

    @Post('logout')
    logout() { }
}
