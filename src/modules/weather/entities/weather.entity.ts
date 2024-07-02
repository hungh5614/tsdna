import { Tsvresult } from 'src/modules/tsvresult/entities/Tsvresult.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'weather' })
export class Weather {
  @PrimaryGeneratedColumn({ name: 'IdWeather' })
  IdWeather?: number;

  @Column({ name: 'Mist' })
  Mist: number;

  @Column({ name: 'WindSpeed' })
  WindSpeed: number;

  @Column({ name: 'WindDrection' })
  WindDrection: number;

  @Column({ name: 'Weather' })
  Weather?: number;

  @OneToMany(() => Tsvresult, (tsvresult) => tsvresult.weather)
  tsvresult: Tsvresult[];
}
