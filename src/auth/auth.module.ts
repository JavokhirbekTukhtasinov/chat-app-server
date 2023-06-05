import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { Services, accesTokenSecret } from 'src/utils/constants';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [UserModule, JwtModule.register({ secret: accesTokenSecret, global: true })],
  controllers: [AuthController],
  providers: [{
    provide: Services.AUTH,
    useClass: AuthService
  }],

})
export class AuthModule { }
