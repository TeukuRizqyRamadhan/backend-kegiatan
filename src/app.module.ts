import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KegiatanModule } from './kegiatan/kegiatan.module';

@Module({
  imports: [KegiatanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
