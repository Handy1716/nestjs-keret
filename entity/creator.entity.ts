import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Creator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  created: Date;
}
