import {
  Controller,
  Param,
  Req,
  Put,
  Post,
  Delete,
  Get,
  Query,
} from '@nestjs/common';

import { MenuService } from './menu.service';
import { get } from 'http';

@Controller('menu')
export class MenuController {
  @Get(':menu')
  FindAll(@Req() menu: string): string {
    return `menu ${menu}`;
  }
  @Get()
  Find(@Query('age') age: number, @Query('breed') breed: string) {
    return `This action return all by age : ${age} and breed ${breed}`;
  }

  
  @Post()
  Create(): string {
    return 'this action adds a new user';
  }
  @Put(':id')
  Update(@Param('id') id: string): string {
    return `this action update menu id ${id}`;
  }
  @Delete(':id')
  Delete(@Param('id') id: string): string {
    return `this action delete user is ${id}`;
  }
}
