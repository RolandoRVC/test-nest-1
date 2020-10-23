import { Module } from '@nestjs/common';
import { ProductosController } from './controllers/productos/productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosService } from './services/productos/productos.service';
import {Productos} from './entities/productos.entity';
@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
  imports:[
    TypeOrmModule.forFeature([Productos])
  ]
})
export class ProductosModule {}
