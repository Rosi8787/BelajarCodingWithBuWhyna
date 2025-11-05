import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MenuController } from './menu/menu.controller';
import { MenuService } from './menu/menu.service';
import { TodosModule } from './todos/todos.module';
import { SiswaController } from './siswa/siswa.controller';
import { SiswaService } from './siswa/siswa.service';
import { SiswaModule } from './siswa/siswa.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from 'prisma/prisma.module';
import { BcryptController } from './bcrypt/bcrypt.controller';
import { BcryptModule } from './bcrypt/bcrypt.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [PrismaModule,TodosModule, SiswaModule, UsersModule, BcryptModule, AuthModule],
  controllers: [AppController, UserController, MenuController, SiswaController, BcryptController],
  providers: [AppService, UserService, MenuService, SiswaService],
})
export class AppModule {}
