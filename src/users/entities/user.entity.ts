import { IsString, minLength } from 'class-validator';
import {Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm'
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true, nullable: false})
    email: string;

    @Column({nullable: false, select: false})
    password: string;

    @Column({default: 'user'})
    role: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
