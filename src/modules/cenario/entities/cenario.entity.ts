import { Tsvresult } from 'src/modules/tsvresult/entities/Tsvresult.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'scenario' })
export class Scenario {
  @PrimaryGeneratedColumn({ name: 'IdScenario' })
  IdScenario?: number;

  @Column({ name: 'Name' })
  Name: string;

  @Column({ name: 'IdScene' })
  IdScene: number;

  @Column({ name: 'BulletLimit' })
  BulletLimit?: number;

  @Column({ name: 'Time' })
  Time?: number;

  @Column({ name: 'Lane' })
  Lane?: number;

  @Column({ name: 'PersonLane' })
  PersonLane?: number;

  @Column({ name: 'IdWeapon' })
  IdWeapon?: string;

  @Column({ name: 'IdCamera' })
  IdCamera?: Date;

  @Column({ name: 'Description' })
  Description?: string;

  @Column({ name: 'Created' })
  Created?: Date;

  @Column({ name: 'Updated' })
  Updated?: Date;

  @Column({ name: 'Status' })
  Status?: number;

  @OneToMany(() => Tsvresult, (tsvresult) => tsvresult.scenario)
  tsvresult: Tsvresult[];
}
