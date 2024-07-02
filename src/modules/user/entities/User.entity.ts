import { Tsvresult } from 'src/modules/tsvresult/entities/Tsvresult.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'student' })
export class User {
  @PrimaryGeneratedColumn({ name: 'IdStudent' })
  IdStudent?: number;

  @Column({ name: 'UserName' })
  UserName?: string;

  @Column({ name: 'Password' })
  Password?: string;

  @Column({ name: 'FullName' })
  FullName?: string;

  @Column({ name: 'IdGroup' })
  IdGroup?: number;

  @Column({ name: 'IdGrade' })
  IdGrade?: number;

  @Column({ name: 'IdRoles' })
  IdRoles?: number;

  @Column({ name: 'Unit' })
  Unit?: string;

  @Column({ name: 'Description' })
  Description?: string;

  @Column({ name: 'Status' })
  Status?: number;

  @Column({ name: 'CalibUrl' })
  CalibUrl?: string;

  @Column({ name: 'IdTeam' })
  IdTeam?: number;

  @OneToMany(() => Tsvresult, (tsvresult) => tsvresult.student)
  tsvresult: Tsvresult[];
}
