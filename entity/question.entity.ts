import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Quiestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quizId: number;

  @Column()
  text: string;
}
