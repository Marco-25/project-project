import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('clients')
class Clients {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    company_name: string;

    @Column()
    fantasy_name: string;

    @Column()
    type: string;

    @Column()
    released: string;

    @Column()
    CPF?: string;

    @Column()
    CNPJ?: string;

    @Column()
    address: string;

    @Column()
    district: string;

    @Column()
    City: string;

    @Column()
    Zip_code: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    contact_name: string;

    @Column()
    email: string;

    @Column()
    observation: string;

    @Column()
    DDI_telephone: string;

    @Column()
    telephone_number: string;

    @Column()
    DDI_cell: string;

    @Column()
    cell: string;

    @CreateDateColumn()
    created: Date;
}

export default Clients;