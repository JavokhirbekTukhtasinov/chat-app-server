import { UserLoginDto } from "src/auth/dtos/login-user-dto";
import { CreateUserDetails } from "src/utils/createUserType";

export interface IUserService {
    createUser(user: CreateUserDetails)
    loginUser(user: UserLoginDto)
    profile(user: any)
}
