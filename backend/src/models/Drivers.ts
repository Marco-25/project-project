import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('drivers')
class Drivers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    CNH: string;
    
    @Column()
    CPF: string;
    
    @Column()
    address: string;
    
    @Column()
    district: string;
    
    @Column()
    city: string;
    
    @Column()
    zip_code: string;
    
    @Column()
    state: string;
    
    @Column()
    email: string;
    
    @Column()
    cell: string;
    
    @CreateDateColumn()
    created: Date;
}

export default Drivers;