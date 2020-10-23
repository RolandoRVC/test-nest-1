import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
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
    @OneToMany(() => Chancla, chancla => chancla.user)
    chanclas: Chancla[];
}
