import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Tiendas } from '../../entities/tiendas.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TiendasService extends TypeOrmCrudService<Tiendas>{
    constructor(@InjectRepository(Tiendas) tiendasRepository: Repository<Tiendas>){
        super(tiendasRepository);
    }
}