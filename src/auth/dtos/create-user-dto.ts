import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    first_name: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    last_name: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    password: string
}