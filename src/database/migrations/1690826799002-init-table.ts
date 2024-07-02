import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitTable1690826799002 implements MigrationInterface {
  name = 'InitTable1690826799002';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`comment\` (\`createdBy\` varchar(255) NULL, \`createdDate\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`lastModifiedBy\` varchar(255) NULL, \`lastModifiedDate\` datetime NULL, \`commentId\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NULL, \`content\` text NOT NULL, \`duration\` float NOT NULL, \`file\` varchar(255) NULL, \`videoId\` int NOT NULL, PRIMARY KEY (\`commentId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`project\` (\`createdBy\` varchar(255) NULL, \`createdDate\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`lastModifiedBy\` varchar(255) NULL, \`lastModifiedDate\` datetime NULL, \`projectId\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`avatar\` varchar(255) NULL, PRIMARY KEY (\`projectId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`video\` (\`createdBy\` varchar(255) NULL, \`createdDate\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`lastModifiedBy\` varchar(255) NULL, \`lastModifiedDate\` datetime NULL, \`videoId\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NULL, \`path\` varchar(255) NULL, \`projectId\` int NOT NULL, \`duration\` float NOT NULL, \`size\` int NOT NULL DEFAULT '0', \`width\` int NOT NULL DEFAULT '0', \`height\` int NOT NULL DEFAULT '0', \`fps\` int NOT NULL DEFAULT '0', \`metadata\` text NULL, PRIMARY KEY (\`videoId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`layer\` (\`createdBy\` varchar(255) NULL, \`createdDate\` timestamp NULL DEFAULT CURRENT_TIMESTAMP, \`lastModifiedBy\` varchar(255) NULL, \`lastModifiedDate\` datetime NULL, \`layerId\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NULL, \`duration\` float NOT NULL, \`file\` varchar(255) NULL, \`videoId\` int NOT NULL, PRIMARY KEY (\`layerId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_fae151444dcca85704ef1fbb285\` FOREIGN KEY (\`videoId\`) REFERENCES \`video\`(\`videoId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` ADD CONSTRAINT \`FK_47570aa62f8256902c2eb6fa7b0\` FOREIGN KEY (\`projectId\`) REFERENCES \`project\`(\`projectId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`layer\` ADD CONSTRAINT \`FK_9e711d23c2c21394eab5bdd95b3\` FOREIGN KEY (\`videoId\`) REFERENCES \`video\`(\`videoId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`layer\` DROP FOREIGN KEY \`FK_9e711d23c2c21394eab5bdd95b3\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`video\` DROP FOREIGN KEY \`FK_47570aa62f8256902c2eb6fa7b0\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_fae151444dcca85704ef1fbb285\``,
    );
    await queryRunner.query(`DROP TABLE \`layer\``);
    await queryRunner.query(`DROP TABLE \`video\``);

    await queryRunner.query(`DROP TABLE \`project\``);
    await queryRunner.query(`DROP TABLE \`comment\``);
  }
}
