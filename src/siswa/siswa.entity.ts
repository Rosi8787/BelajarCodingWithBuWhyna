import { isNotEmpty, IsString } from 'class-validator';
export class Siswa {
  @IsString()
  nisn: string;
  nama: string;   // tambahkan ini
  alamat: string;
  umur: number;
}

