import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'shotresult' })
export class Shotresult {
  @PrimaryGeneratedColumn({ name: 'idShotResult' })
  idShotResult?: number;

  @Column({ nullable: true, name: "idTSVResult"})
  idTSVResult?: number; 
  
  @Column({ nullable: true, name: "ShotResultTarget"})
  ShotResultTarget?: number; 
    
  @Column({ nullable: true, name: "	ShotResultScore"})
    ShotResultScore?: string; 

  @Column({ nullable: true, name: "notes"})
  notes?: string; 
}
