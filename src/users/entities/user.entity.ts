import { type } from 'os';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Chancla } from '../../chanclas/entities/chanclas.entity';
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    email: string;
    @Column({unique:true})
    username: string;
    @Column()
    displayName: string;
    @OneToMany(type => Chancla, chancla => chancla.user)
    chanclas: Chancla[];
}
