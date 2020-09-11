import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserTable1599860252963 implements MigrationInterface {
    name = 'CreateUserTable1599860252963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `displayName` varchar(255) NOT NULL, UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_78a916df40e02a9deb1c4b75ed` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
