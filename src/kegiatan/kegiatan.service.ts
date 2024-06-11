import { Injectable } from '@nestjs/common';
import { CreateKegiatanDto } from './dto/create-kegiatan.dto';
import { UpdateKegiatanDto } from './dto/update-kegiatan.dto';
import { Kegiatan, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class KegiatanService {
  constructor(private prisma: PrismaService) { }
  async create(data: CreateKegiatanDto): Promise<Kegiatan> {
    return await this.prisma.kegiatan.create({
      data: data
    })
  }

  async findAll() {
    return await this.prisma.kegiatan.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.kegiatan.findFirst({ where: { id: id } })
  }

  async update(id: number, updateKegiatanDto: UpdateKegiatanDto) {
    return await this.prisma.kegiatan.update({
      where: { id: id },
      data: updateKegiatanDto
    })
  }

  async remove(id: number) {
    const deletedKegiatan = await this.prisma.kegiatan.delete({ where: { id: id } })

    return "deleted kegiatan dengan id " + deletedKegiatan.id + " dan nama kegiatan " + deletedKegiatan.namaKegiatan
  }
}
