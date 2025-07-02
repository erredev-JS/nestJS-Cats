import {Entity, Column, DeleteDateColumn} from 'typeorm'

@Entity()
export class Breed {
    
    @Column({generated: true, primary: true})
    id: number;

    @Column()
    name: string

}
