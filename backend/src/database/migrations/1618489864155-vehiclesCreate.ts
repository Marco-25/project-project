import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class vehiclesCreate1618489864155 implements MigrationInterface {

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
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'year',
                        type: 'varchar',
                    },
                    {
                        name: 'color',
                        type: 'varchar',
                    },
                    {
                        name: 'brand',
                        type: 'varchar',
                    },
                    {
                        name: 'model',
                        type: 'varchar',
                    },
                    {
                        name: 'tank',
                        type: 'varchar',
                    },
                    {
                        name: 'fuel',
                        type: 'varchar',
                    },
                    {
                        name: 'renavam',
                        type: 'varchar',
                    },
                    {
                        name: 'observation',
                        type: 'text',
                    },
                    {
                        name: 'he_scores',
                        type: 'varchar',
                    },

                    {
                        name: 'id_type',
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
        await queryRunner.dropTable('vehicles');
    }

}
