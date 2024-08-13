import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'techniquelesson' })
export class Techniquelesson {
  @PrimaryGeneratedColumn({ name: 'idtechniquelesson' })
  idtechniquelesson?: number;

  @Column({ nullable: true, name: "type"})
  type?: number; 
  
  @Column({ nullable: true, name: "IdLesson"})
  IdLesson?: number; 
    
  @Column({ nullable: true, name: "	IdCoverTarget"})
  IdCoverTarget?: number; 
}
