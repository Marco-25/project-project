import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('trackers')
class Tracker {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @Column()
    manufacturer : string;

    @Column()
    tag : string;

    @Column()
    chip_number : string;

    @Column()
    operator : string;

    @Column()
    id_vehicle : number;

    @CreateDateColumn()
    created: Date;

}

export default Tracker;
