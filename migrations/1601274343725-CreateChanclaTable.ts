import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateChanclaTable1601274343725 implements MigrationInterface {
    name = 'CreateChanclaTable1601274343725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `displayName` varchar(255) NOT NULL, UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `chancla` (`id` int NOT NULL AUTO_INCREMENT, `modelo` varchar(255) NOT NULL, `color` varchar(255) NOT NULL, `userId` int NULL, UNIQUE INDEX `IDX_32f19068fb672747a23ece0f6d` (`color`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `chancla` ADD CONSTRAINT `FK_6baeaf0b01e52b66058ad405a18` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `chancla` DROP FOREIGN KEY `FK_6baeaf0b01e52b66058ad405a18`");
        await queryRunner.query("DROP INDEX `IDX_32f19068fb672747a23ece0f6d` ON `chancla`");
        await queryRunner.query("DROP TABLE `chancla`");
        await queryRunner.query("DROP INDEX `IDX_78a916df40e02a9deb1c4b75ed` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
