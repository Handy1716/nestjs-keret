import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questionId: number;

  @Column()
  text: string;

  @Column()
  rightAnswer: boolean;
}
