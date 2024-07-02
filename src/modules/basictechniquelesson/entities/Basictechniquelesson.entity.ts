import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'basictechniquelesson' })
export class Basictechniquelesson {
  @PrimaryGeneratedColumn({ name: 'idBasicTechniqueLesson' })
  idBasicTechniqueLesson?: number;

  @Column({ name: 'Name' })
  Name: string;

  @Column({ name: 'IdScene' })
  IdScene: number;

  @Column({ name: 'BulletLimit' })
  BulletLimit?: number;

  @Column({ name: 'IdWeapons' })
  IdWeapons?: number;

  @Column({ name: 'Description' })
  Description?: string;

  @Column({ name: 'Data' })
  Data?: string;

  @Column({ name: 'IsLessonDefault' })
  IsLessonDefault?: number;

  @Column({ name: 'Author' })
  Author?: number;
}
