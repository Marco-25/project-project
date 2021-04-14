import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTrackers1618424645230 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'trackers',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                           
                    },
                    {
                        name: 'manufacturer',
                        type: 'varchar',
                        default: 'não informado'
                    },
                    {
                        name: 'tag',
                        type: 'varchar',
                        default: 'carro',
                    },
                    {
                        name: 'chip_number',
                        type: 'varchar',
                        default: '0000000000',
                    },
                    {
                        name: 'operator',
                        type: 'varchar',
                        default: 'vivo',
                    },
                    {
                        name: 'id_vehicle',
                        type: 'int',
                    },
                    {
                        name: 'created',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('trackers');
    }

}
