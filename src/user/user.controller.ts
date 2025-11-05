import {
  Controller,
  Get,
  Req,
  Param,
  Put,
  Post,
  Delete,
  Query,
} from '@nestjs/common';
import type { request } from 'express';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}
  //  @Get()
  //  findAll(): string {
  // return 'This action returns all user';

  @Get('all')
  findAll(@Req() request) {
    return this.UserService.finAll;
  }
  @Get('secondUser')
  findBy(@Req() request: Request): string {
    return 'Whats up Nigga 2';
  }
  @Get(':nama')
  findOne(@Param() param: any): string {
    return `Orang hilang bernama ${param.nama} dan orang yang menukan adalah ${param.namaa}`;
  }
  @Get(':nama/:namaa')
  find(@Param('nama') nama: string, @Param('namaa') namaa: string): string {
    return `Orang hilang bernama ${nama} dan orang yang menukan adalah ${namaa}`;
  }
  @Post()
  Create(): string {
    return 'this action adds a new user';
  }
  @Put(':id')
  Update(@Param('id') id: string): string {
    return `this action update user id ${id}`;
  }
  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `this action delete user id ${id}`;
  }
  @Get()
  async(
    @Query('nama') nama: string,
    @Query('age') age: number,
    @Query('breed') breed: string,
  ) {
    return `this action return all filtered by
         nama  : ${nama}
         age   : ${age} 
         breed : ${breed}`;
  }
}
