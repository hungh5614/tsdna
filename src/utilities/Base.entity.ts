import {
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseModel extends BaseEntity {
  @Column({ nullable: true })
  createdBy?: string;

  @CreateDateColumn()
  @Column('timestamp', { nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdDate?: Date;

  @Column({ nullable: true, select: false })
  lastModifiedBy?: string;

  @UpdateDateColumn()
  @Column({ nullable: true, select: false })
  lastModifiedDate?: Date;
}
