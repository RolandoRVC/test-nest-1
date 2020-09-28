import { type } from 'os';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { User } from "../../users/entities/user.entity";

@Entity()
export class Chancla{
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    modelo: string;
    @Column({unique:true})
    color: string;
    @ManyToOne(type => User, user => user.chanclas)
    user: User;
}
