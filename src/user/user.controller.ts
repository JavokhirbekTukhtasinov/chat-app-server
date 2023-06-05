import { Controller, Get, Inject, Post, Req, UseGuards } from '@nestjs/common';
import { Services } from 'src/utils/constants';
import { IUserService } from './user';
import { Routes } from 'src/utils/constants';
import { AuthGuard } from 'src/utils/guards/auth-guard';

@Controller(Routes.USERS)
export class UserController {
    constructor(@Inject(Services.USERS) private userService: IUserService) { }

    @UseGuards(AuthGuard)
    @Get('profile')
    profile(@Req() req) {
        return this.userService.profile(req.user.user_id)
    }
}
