import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'laser' })
export class Laser {
  @PrimaryGeneratedColumn({ name: 'idlaser' })
  idlaser?: number;

  @Column({ name: 'Name' })
  Name: string;

  @Column({ name: 'Color' })
  Color?: string;
}
