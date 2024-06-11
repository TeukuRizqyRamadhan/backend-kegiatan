import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KegiatanService } from './kegiatan.service';
import { CreateKegiatanDto } from './dto/create-kegiatan.dto';
import { UpdateKegiatanDto } from './dto/update-kegiatan.dto';

@Controller('kegiatan')
export class KegiatanController {
  constructor(private readonly kegiatanService: KegiatanService) {}

  @Post()
  create(@Body() createKegiatanDto: CreateKegiatanDto) {
    return this.kegiatanService.create(createKegiatanDto);
  }

  @Get()
  findAll() {
    return this.kegiatanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kegiatanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKegiatanDto: UpdateKegiatanDto) {
    return this.kegiatanService.update(+id, updateKegiatanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kegiatanService.remove(+id);
  }
}
