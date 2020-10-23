import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Productos } from '../../entities/productos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService extends TypeOrmCrudService<Productos>{
    constructor(@InjectRepository(Productos) productosRepository: Repository<Productos>){
        super(productosRepository);
    }
}
