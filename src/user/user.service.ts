import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUserService } from './user';
import { CreateUserDetails } from 'src/utils/createUserType';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/utils/typeorm';
import { Repository } from 'typeorm';
import { comparePassword, hashPasswrod } from 'src/utils/helper';
import { UserLoginDto } from 'src/auth/dtos/login-user-dto';
import { JwtService } from '@nestjs/jwt';
import { accesTokenSecret } from 'src/utils/constants';

@Injectable()
export class UserService implements IUserService {

    constructor(
        @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
        private jwtService: JwtService

    ) { }


    async createUser(user: CreateUserDetails) {
        const existUser = await this.userRepo.findOneBy({ email: user.email })
        if (existUser) throw new HttpException('User already exist', HttpStatus.CONFLICT)
        const password = await hashPasswrod(user.password)
        const newUser = this.userRepo.create({ ...user, password })
        return await this.userRepo.save(newUser)
    }

    async loginUser(loginUser: UserLoginDto) {
        const user = await this.userRepo.findOneBy({ email: loginUser.email })
        console.log(user)
        if (!user) throw new HttpException('User is not exist', HttpStatus.NOT_FOUND)

        const isMatch = await comparePassword(loginUser.password, user.password)

        if (!isMatch) throw new HttpException('User password is not correct', HttpStatus.BAD_REQUEST)
        const payload = { sub: user.user_id, fist_name: user.first_name }
        return {
            access_token: await this.jwtService.signAsync(payload, { secret: accesTokenSecret, expiresIn: '30s' })
        }
    }


    async profile(user_id: number) {

        try {
            const { password, ...rest } = await this.userRepo.findOne({ where: { user_id } })
            return rest
        } catch (error) {
            throw new BadRequestException()
        }

    }
}



