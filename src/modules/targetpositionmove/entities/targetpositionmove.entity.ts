import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'targetpositionmove' })
export class Targetpositionmove {
  @PrimaryGeneratedColumn({ name: 'idtargetpositionmove' })
  idtargetpositionmove?: number;

  @Column({ nullable: true, name: "type"})
  type?: number; 
  
  @Column({ nullable: true, name: "IdLesson"})
  IdLesson?: number; 
    
  @Column({ nullable: true, name: "	IdCoverTarget"})
  IdCoverTarget?: number; 
}
