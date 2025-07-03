import { Breed } from 'src/breeds/entities/breed.entity';
import {Entity, Column, DeleteDateColumn, ManyToOne} from 'typeorm'

@Entity()
export class Cat {

    @Column({generated: true, primary: true})
    id: number;

    @Column()
    name: string

    @Column()
    age: number
    
    @ManyToOne(() => Breed, (breed) => breed.id, {eager: true})
    breed: Breed
    
    
    @DeleteDateColumn()
    deletedAt: Date
    
}
