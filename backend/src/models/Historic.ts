import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('historic')
class Historic {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    id_vehicle : number;

    @Column()
    id_driver: number;

    @CreateDateColumn()
    created: Date;
}

export default Historic;

