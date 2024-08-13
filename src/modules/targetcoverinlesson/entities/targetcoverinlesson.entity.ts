import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'targetcoverinlesson' })
export class Targetcoverinlesson {
  @PrimaryGeneratedColumn({ name: 'idtargetcoverinlesson' })
  idtargetcoverinlesson?: number;

  @Column({ nullable: true, name: "type"})
  type?: number; 
  
  @Column({ nullable: true, name: "IdLesson"})
  IdLesson?: number; 
    
  @Column({ nullable: true, name: "	IdCoverTarget"})
  IdCoverTarget?: number; 
}
