import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class driversCreate1618489754354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.createTable(
            new Table({
                name: 'drivers',
                columns: [
                    {
                         name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'CNH',
                        type: 'varchar'
                    },
                    {
                        name: 'CPF',
                        type: 'varchar'
                    },
                    {
                        name: 'address',
                        type: 'varchar',
                    },
                    {
                        name: 'district',
                        type: 'varchar',
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                    },
                    {
                        name: 'zip_code',
                        type: 'varchar',
                    },
                    {
                        name: 'state',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'cell',
                        type: 'varchar',
                    },
                    {
                        name: 'created',
                        type: 'timestamp',
                        default: 'now()'
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('drivers');
    }

}
