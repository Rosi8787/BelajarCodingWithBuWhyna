import { Injectable, NotFoundException } from '@nestjs/common';
import { Siswa } from './siswa.entity';

@Injectable()
export class SiswaService {
  private siswaList: Siswa[] = [
    { nisn: '101', nama: 'Andi', alamat: 'Bandung', umur: 17 },
    { nisn: '102', nama: 'Budi', alamat: 'Jakarta', umur: 16 },
    { nisn: '103', nama: 'Rosi', alamat: 'Malang', umur: 15 },
  ];

  findAll(): Siswa[] {
    return this.siswaList;
  }

  findOne(nisn: string): Siswa {
    const siswa = this.siswaList.find((s) => s.nisn === nisn);
    if (!siswa) {
      throw new NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
    }
    return siswa;
  }

  create(siswa: Siswa): Siswa {
    this.siswaList.push(siswa);
    return siswa;
  }

  update(nisn: string, updateData: Partial<Siswa>): Siswa {
    const siswa = this.findOne(nisn);
    Object.assign(siswa, updateData);
    return siswa;
  }

  remove(nisn: string): void {
    const index = this.siswaList.findIndex((s) => s.nisn === nisn);
    if (index === -1) {
      throw new NotFoundException(`Siswa dengan NISN ${nisn} tidak ditemukan`);
    }
    this.siswaList.splice(index, 1);
  }
}
