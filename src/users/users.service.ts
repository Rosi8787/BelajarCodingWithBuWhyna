import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import { BcryptService } from 'src/bcrypt/bcrypt.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private readonly bcrypt: BcryptService
  ){}
  // constructor(private prisma: PrismaService) {}
  
  //=====================(Create)=====================//

  async create(createUserDto: CreateUserDto) {
    try {
      const { name, email, password,role } = createUserDto;
      const createUser = await this.prisma.user.create({
        data: {
          name,
          email,
          //password,
          password : await this.bcrypt.hashPassword(password),
          role
        },
      });

      return {
        succes: true,
        message: 'user data found succesfully',
        data: createUser
      };
    } catch (eror) {
      return {
        succes: false,
        massage: `eror when get user ${eror.message}`,
        data: null
      };
    }
  }

  //=====================(Find)=====================//

  async findAll() {
    try {
      const users = await this.prisma.user.findMany()
      return {
        succes: true,
        message: 'user data found succesfully',
        data: users
      }
    } catch (eror) {
      return {
        succes: false,
        massage: `eror when get user ${eror.message}`,
        data: null
      } 
    }
  }
  async findOne(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  //=====================(Update)=====================//

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const {name,email,password,role} = updateUserDto
      const findUser = await this.prisma.user.findFirst({
        where: {id: id }
      })
      if (!findUser){
        return{
          success: false,
          massage: `User does not exists`,
          data: null
        }
      } 

      const updateUser = await this.prisma.user.update({
        where: {id: id},
        data: {
          name: name?? findUser.name,
          email: email?? findUser.email,
          role: role?? findUser.role,
          // password: password?? findUser.password,
          password: password ? await this.bcrypt.hashPassword(password): findUser.password
        }
      })

      return{
        success: true,
      massage: `New user has updated`,
      data: updateUser
      }
      
    
    }catch(eror){
      return{
        success: false,
        massage: `Eror when update user: ${eror.massage}`,
        data: null
      }
    }
  }

  //=====================(Delete)=====================//
  
  async remove(id: number) {
    try{
      const findUser = await this.prisma.user.findFirst({
        where:{
          id:id
        }
      })
      if(!findUser){
        return{
          succes: true,
          message:`User does not exists`,
          data: null
        }
      }
      const deleteUser = await this.prisma.user.delete({
        where: {
          id: id
        }
      })
      return{
        success: true,
        message: `User has deleted`,
        data: deleteUser
      }
    }catch (error){
      return{
        success:false,
        message:`Error when delete user`,
        data: null
      }
    }
    // return await this.prisma.user.delete({ where: { id } });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}