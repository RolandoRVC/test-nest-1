import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTiendasTable1603492903758 implements MigrationInterface {
    name = 'CreateTiendasTable1603492903758'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `tiendas` (`id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `direccion` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `productos` (`id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `precio` int NOT NULL, `tiendaId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `productos` ADD CONSTRAINT `FK_89bbb5deb91026f0bfb15a005be` FOREIGN KEY (`tiendaId`) REFERENCES `tiendas`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `productos` DROP FOREIGN KEY `FK_89bbb5deb91026f0bfb15a005be`");
        await queryRunner.query("DROP TABLE `productos`");
        await queryRunner.query("DROP TABLE `tiendas`");
    }

}
