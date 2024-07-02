import { Weapon } from 'src/modules/weapon/entities/Weapon.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, W } from 'typeorm';

@Entity({ name: 'gun' })
export class Gun {
  @PrimaryGeneratedColumn({ name: 'idgun' })
  idgun?: number;

  @Column({ name: 'typeWeapon' })
  typeWeapon: number;

  @Column({ name: 'codeGun' })
  codeGun: string;

  @Column({ name: 'countShot' })
  countShot?: number;

  @Column({ name: 'description' })
  description?: string;

  @ManyToOne(() => Weapon, (weapon) => weapon.gun)
  @JoinColumn({ name: 'typeWeapon', referencedColumnName: 'IdWeapon'})
  weapon?: Weapon;
}
