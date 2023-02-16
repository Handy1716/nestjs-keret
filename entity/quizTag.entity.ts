import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class QuizTag {
  @PrimaryGeneratedColumn()
  quizId: number;
  @Column()
  tagId: number;
}
