import { Module } from '@nestjs/common';
import { ChanclasController } from './controllers/chanclas/chanclas.controller';
import { ChanclasService } from './services/chanclas/chanclas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chancla } from './entities/chanclas.entity';
@Module({
  controllers: [ChanclasController],
  providers: [ChanclasService],
  imports: [
    TypeOrmModule.forFeature([Chancla])
  ]
})
export class ChanclasModule {}
