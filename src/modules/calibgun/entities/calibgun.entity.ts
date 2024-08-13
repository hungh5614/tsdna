import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'calibgun' })
export class Calibgun {
  @PrimaryGeneratedColumn({ name: 'idcalibGun' })
  idcalibGun?: number;

  @Column({ nullable: true, name: 'idLaser' })
  idLaser?: number;

  @Column({ nullable: true, name: 'idBullet' })
  idBullet?: number;

  @Column({ nullable: true, name: 'calibX', type: 'float' })
  calibX?: number;

  @Column({ nullable: true, name: 'calibY', type: 'float' })
  calibY?: number;
}
