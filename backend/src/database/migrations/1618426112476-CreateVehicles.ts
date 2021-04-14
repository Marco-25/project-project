import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTrackers1618424645230 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'vehicles',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                           
                    },
                    {
                        name: 'year',
                        type: 'varchar',
                        default: '2020'
                    },
                    {
                        name: 'color',
                        type: 'varchar',
                        default: 'preto',
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                        default: 'carro',
                    },
                    {
                        name: 'brand',
                        type: 'varchar',
                        default: 'ford',
                    },
                    {
                        name: 'model',
                        type: 'varchar',
                        default: '2018',
                    },
                    {
                        name: 'tank',
                        type: 'varchar',
                        default: '12',
                    },
                    {
                        name: 'fuel',
                        type: 'varchar',
                        default: 'gasolina',
                    },
                    {
                        name: 'renavam',
                        type: 'varchar',
                        default: 'gasolina',
                    },
                    {
                        name: 'observation',
                        type: 'text',
                    },
                    {
                        name: 'he_scores',
                        type: 'varchar',
                        default: 'yde-1202',
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
        await queryRunner.dropTable('vehicles');
    }

}
