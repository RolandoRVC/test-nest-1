import { Module } from '@nestjs/common';
import { TiendasController } from './controllers/tiendas/tiendas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiendasService } from './services/tiendas/tiendas.service';
import {Tiendas} from './entities/tiendas.entity';
@Module({
  controllers: [TiendasController],
  providers: [TiendasService],
  imports:[
    TypeOrmModule.forFeature([Tiendas])
  ]
})
export class TiendasModule {}
