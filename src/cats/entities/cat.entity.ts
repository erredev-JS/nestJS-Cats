import {Entity, Column, DeleteDateColumn} from 'typeorm'

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
    
}
