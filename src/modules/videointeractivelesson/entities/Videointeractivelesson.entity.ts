import { Weapon } from 'src/modules/weapon/entities/Weapon.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'videointeractivelesson' })
export class Videointeractivelesson {
  @PrimaryGeneratedColumn({ name: 'idLesson' })
  idLesson?: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'bulletLimit' })
  bulletLimit?: number;

  @Column({ name: 'description' })
  description?: string;

  @Column({ name: 'data', type: 'json' })
  data?: string;

  @Column({ name: 'IdWeapon01' })
  IdWeapon01?: number;

  @Column({ name: 'IdWeapon02' })
  IdWeapon02?: number;

  @Column({ name: 'SceneFileName' })
  SceneFileName?: string;

  @ManyToOne(() => Weapon, (weapon) => weapon.videointeractivelesson1)
  @JoinColumn({ name: 'IdWeapon01', referencedColumnName: 'IdWeapon' })
  weapon1?: Weapon;

  @ManyToOne(() => Weapon, (weapon) => weapon.videointeractivelesson2)
  @JoinColumn({ name: 'IdWeapon02', referencedColumnName: 'IdWeapon' })
  weapon2?: Weapon;
}
