import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { User } from "../../users/entities/user.entity";

@Entity()
export class Chancla{
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    modelo: string;
    @Column()
    color: string;
    @ManyToOne(() => User, user => user.chanclas)
    user: User;
}
