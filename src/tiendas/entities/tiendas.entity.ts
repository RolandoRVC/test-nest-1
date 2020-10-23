import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Productos } from '../../productos/entities/productos.entity'; 
@Entity()
export class Tiendas{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    direccion : string;
    @OneToMany(()=> Productos, productos => productos.tienda)
    productos: Productos[];

}