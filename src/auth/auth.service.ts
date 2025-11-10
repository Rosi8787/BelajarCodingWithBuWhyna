import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcrypt: BcryptService,
    private readonly jwt: JwtService,
  ) {}
  async auth(authDto: AuthDto) {
    try {
      const { email, password } = authDto;
      const findUser = await this.prisma.user.findFirst({
        where: { email },
      });
      if (!findUser) {
        return {
          success: false,
          message: `invalid email`,
          data: null,
        };
      }

      const isMatchpassword = await this.bcrypt.comparePassword(
        password,
        findUser.password,
      );
      if (!isMatchpassword) {
        return {
          success: false,
          message: `invalid password`,
          data: null,
        };
      }

      const token = this.jwt.sign({
        id: findUser.id,
        name: findUser.name,
        role: findUser.role,
      });

      return {
        success: true,
        message: `login successful`,
        data: { token, name: findUser.name, role: findUser.role },
      };
    } catch (error) {
      return {
        success: false,
        message: `error when signin: ${error.message}`,
        data: null,
      };
    }
  }
  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
