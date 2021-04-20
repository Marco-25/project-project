import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class trackerCreate1618489950912 implements MigrationInterface {

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
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'manufacturer',
                        type: 'varchar',
                    },
                    {
                        name: 'tag',
                        type: 'varchar',
                    },
                    {
                        name: 'chip_number',
                        type: 'varchar',
                    },
                    {
                        name: 'operator',
                        type: 'varchar',
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
