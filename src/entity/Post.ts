import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    date_publication: Date;

    @Column()
    date_expiration: Date;

    @Column()
    fk_product: number;



}
