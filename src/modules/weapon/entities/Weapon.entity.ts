import { Basictechniquelesson } from 'src/modules/basictechniquelesson/entities/Basictechniquelesson.entity';
import { Gun } from 'src/modules/gun/entities/gun.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'weapon' })
export class Weapon {
  @PrimaryGeneratedColumn({ name: 'IdWeapon' })
  IdWeapon?: number;

  @Column({ name: 'Name' })
  Name: string;

  @Column({ name: 'Path' })
  Path: string;

  @Column({ name: 'Description' })
  Description?: string;

  @OneToMany(() => Gun, (gun) => gun.weapon)
  gun?: Gun[];

  @OneToMany(() => Basictechniquelesson, (basic) => basic.weapon)
  basictechniquelessons?: Basictechniquelesson[];
}
