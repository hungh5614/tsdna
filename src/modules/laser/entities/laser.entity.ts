import { Gun } from 'src/modules/gun/entities/gun.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'laser' })
export class Laser {
  @PrimaryGeneratedColumn({ name: 'idlaser' })
  idlaser?: number;

  @Column({ name: 'Name' })
  Name: string;

  @Column({ name: 'Color' })
  Color?: string;

  @OneToMany(() => Gun, (value) => value.laser)
  @JoinColumn({ name: 'idlaser', referencedColumnName: 'idLaser' })
  gun?: Gun[];
}
