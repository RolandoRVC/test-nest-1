import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Chancla } from '../../entities/chanclas.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()

export class ChanclasService extends TypeOrmCrudService<Chancla>{
    constructor(@InjectRepository(Chancla) chanclasRepository: Repository<Chancla>){
        super(chanclasRepository)
    }
}
