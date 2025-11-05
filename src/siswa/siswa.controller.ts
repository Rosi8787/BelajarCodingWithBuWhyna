import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { SiswaService } from './siswa.service';
import { Siswa } from './siswa.entity';
import { CreateSiswaDto } from './dto/createSiswa.dto';



@Controller('siswa')
export class SiswaController {
  constructor(private readonly siswaService: SiswaService) {}

  // @Post()
  // @UsePipes(new ValidationPipe())
  //  create(@Body() createSiswaDto : CreateSiswaDto){
  //   return this.siswaService.create(ceateSiswaDto);
  // }

  @Get()
  findAll(): Siswa[] {
    return this.siswaService.findAll();
  }

  @Get(':nisn')
  findOne(@Param('nisn') nisn: string): Siswa {
    return this.siswaService.findOne(nisn);
  }

  // @Post()
  // create(@Body() siswa: Siswa): Siswa {
  //   return this.siswaService.create(siswa);
  // }

  @Put(':nisn')
  update(
    @Param('nisn') nisn: string,
    @Body() updateData: Partial<Siswa>,
  ): Siswa {
    return this.siswaService.update(nisn, updateData);
  }

  @Delete(':nisn')
  remove(@Param('nisn') nisn: string): void {
    return this.siswaService.remove(nisn);
  }
}
