import { Column, Double, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'scene' })
export class Scene {
  @PrimaryGeneratedColumn({ name: '	IdScene' })
  IdScene?: number;

  @Column({ nullable: true, name: 'Name' })
  Name?: string;

  @Column({ nullable: true, name: 'Path' })
  Path?: string;

  @Column({ nullable: true, name: 'LocationX', type: 'double' })
  LocationX?: Double;

  @Column({ nullable: true, name: 'LocationY', type: 'double' })
  LocationY?: Double;

  @Column({ nullable: true, name: 'LocationZ', type: 'double' })
  LocationZ?: Double;
}
