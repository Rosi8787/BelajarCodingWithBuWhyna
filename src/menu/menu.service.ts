import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}
  async create(createMenuDto: CreateMenuDto) {
    try {
      const { name, price, category, description } = createMenuDto;
      const createMenu = await this.prisma.menu.create({
        data: {
          name,
          price: Number(price),
          category,
          description,
        },
      });
      return {
        success: true,
        message: 'menu created successfully',
        data: createMenu,
      };
    } catch (error) {
      return {
        success: false,
        message: `something went wrong ${error.message}`,
        data: null,
      };
    }
  }

  async findAll() {
    try {
      const menus = await this.prisma.menu.findMany();
      return {
        success: true,
        message: 'menu data found successfully',
        data: menus,
      };
    } catch (error) {
      return {
        success: false,
        message: `menu data not found ${error.message}`,
        data: null,
      };
    }
  }

  async findOne(id: number) {
    try {
      const findMenu = await this.prisma.menu.findFirst({ where: { id: id } });
      if (!findMenu) {
        return {
          success: false,
          message: 'menu does not exist',
          data: null,
        };
      }
      return {
        success: true,
        message: 'menu has retrieved',
        data: findMenu,
      };
    } catch (error) {
      return {
        success: false,
        message: `something went wrong ${error.message}`,
        data: null,
      };
    }
  }
}
