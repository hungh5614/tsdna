import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, W } from 'typeorm';

@Entity({ name: 'target' })
export class Target {
  @PrimaryGeneratedColumn({ name: 'IdTarget' })
  IdTarget?: number;

  @Column({ name: 'Name' })
  Name: number;

  @Column({ name: 'Path' })
  Path: string;

  @Column({ name: 'Width', nullable: true })
  Width?: number;

  @Column({ name: 'Height', nullable: true})
  Height?: number;

  @Column({ name: 'Radius', nullable: true})
  Radius?: number;

  @Column({ name: 'OriginalHieght', nullable: true})
  OriginalHieght?: number;
}
