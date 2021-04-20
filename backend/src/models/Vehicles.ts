import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('vehicles')
class Vehicles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    year: string;

    @Column()
    color: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    tank: string;

    @Column()
    fuel: string;

    @Column()
    renavam: string;

    @Column()
    observation: string;

    @Column()
    he_scores: string;

    @Column()
    id_type: number;

    @CreateDateColumn()
    created: Date;
}

export default Vehicles;
