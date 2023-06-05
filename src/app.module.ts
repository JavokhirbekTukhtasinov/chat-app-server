import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import entities from './utils/typeorm';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' }), AuthModule, UserModule, TypeOrmModule.forRoot({
    host: process.env.MYSQL_DB_HOST,
    username: process.env.MYSQL_DB_USERNAME,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    port: parseInt(process.env.MYSQL_DB_PORT),
    entities,
    type: 'mysql',
    // synchronize: true
  })],
  controllers: [],
  providers: [],
})
export class AppModule { }
