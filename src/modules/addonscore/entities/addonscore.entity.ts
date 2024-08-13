import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'addonscore' })
export class Addonscore {
  @PrimaryGeneratedColumn({ name: 'idaddonscore' })
  idaddonscore?: number;

  @Column({ nullable: true, name: "idTSVResult"})
  idTSVResult?: number; 
  
  @Column({ nullable: true, name: "score"})
  score?: number; 

  @Column({ nullable: true, name: "notes"})
  notes?: string; 
}
