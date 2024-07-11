import { Weapon } from 'src/modules/weapon/entities/Weapon.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'videointeractivelesson' })
export class Videointeractivelesson {
  @PrimaryGeneratedColumn({ name: 'idVideoInteractiveLesson' })
  idVideoInteractiveLesson?: number;

  @Column({ name: 'Name' })
  Name: string;

  @Column({ name: 'IdScene' })
  IdScene: number;

  @Column({ name: 'BulletLimit' })
  BulletLimit?: number;

  @Column({ name: 'IdWeapons' })
  IdWeapons?: number;

  @Column({ name: 'Description' })
  Description?: string;

  @Column({ name: 'Data' })
  Data?: string;

  @Column({ name: 'IsLessonDefault' })
  IsLessonDefault?: number;

  @Column({ name: 'Author' })
  Author?: number;

  @ManyToOne(() => Weapon, (weapon) => weapon.videointeractivelesson)
  @JoinColumn({ name: 'IdWeapons' })
  weapon?: Weapon;
}
