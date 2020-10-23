import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Tiendas } from '../../tiendas/entities/tiendas.entity';
@Entity()
export class Productos{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    precio : number;
    @ManyToOne(()=> Tiendas, tiendas => tiendas.productos)
    tienda: Tiendas[];
}