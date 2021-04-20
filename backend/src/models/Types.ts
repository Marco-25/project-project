import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('types')
class Types {
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        name: string;

        @CreateDateColumn()
        created: Date;
}

export default Types;