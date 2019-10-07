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
    datePublication: string;

    @Column()
    dateExpiration: string;

    @Column()
    fk_product: number;



}
