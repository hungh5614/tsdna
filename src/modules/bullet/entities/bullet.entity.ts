import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bullet' })
export class Bullet {
  @PrimaryGeneratedColumn({ name: 'idBullet' })
  idBullet?: number;

  @Column({ name: 'idWeapon' })
  idWeapon: number;

  @Column({ name: 'Name' })
  Name: string;

  @Column({ name: 'Path' })
  Path?: string;
}
