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

    @Column()
    breed: string

    @DeleteDateColumn()
    deletedAt: Date

    @ManyToOne(() => Breed, (breed) => breed.id)
    breed_id: number
    
}
