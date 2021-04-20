import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class typesCreate1618507138407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'types',
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
                        name: 'created',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('types');
    }

}
