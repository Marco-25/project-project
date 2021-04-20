import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class historyCreate1618494458746 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "historic",
                columns: [
                     {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "id_vehicle",
                        type: "int",
                    },
                      {
                        name: "id_driver",
                        type: "int",
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
        await queryRunner.dropTable('historic');
    }

}
