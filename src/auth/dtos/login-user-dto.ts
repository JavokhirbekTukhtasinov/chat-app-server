import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class UserLoginDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(7)
    password: string
}