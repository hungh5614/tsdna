import { Scenario } from 'src/modules/cenario/entities/cenario.entity';
import { User } from 'src/modules/user/entities/User.entity';
import { Weather } from 'src/modules/weather/entities/weather.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tsvresult' })
export class Tsvresult {
  @PrimaryGeneratedColumn({ name: 'IdTSVResult' })
  IdTSVResult?: number;

  @Column({ name: 'IdStudent' })
  IdStudent: number;

  @Column({ name: 'IdScenario' })
  IdScenario: string;

  @Column({ name: 'IdWeather' })
  IdWeather?: number;

  @Column({ name: 'Point' })
  Point?: number;

  @Column({ name: 'TotalTarget' })
  TotalTarget?: number;

  @Column({ name: 'Rank' })
  Rank?: number;

  @Column({ name: 'Description' })
  Description?: string;

  @Column({ name: 'Date' })
  Date?: Date;

  @Column({ name: 'LessonType' })
  LessonType?: number;

  @ManyToOne(() => User, (user) => user.tsvresult)
  @JoinColumn({ name: 'IdStudent', referencedColumnName: 'IdStudent'})
  student: User;

  @ManyToOne(() => Scenario, (scenario) => scenario.tsvresult)
  @JoinColumn({ name: 'IdScenario', referencedColumnName: 'IdScenario'})
  scenario: User;

  @ManyToOne(() => Weather, (weather) => weather.tsvresult)
  @JoinColumn({ name:  'IdWeather', referencedColumnName: 'IdWeather'})
  weather: Weather;
}
