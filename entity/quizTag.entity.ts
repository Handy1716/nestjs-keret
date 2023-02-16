import { Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Quiz from './quiz.entity';
import Tag from './tag.entity';

@Entity()
export default class QuizTag {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Quiz, (quiz) => quiz.quizTags)
  quiz: Quiz;
  @OneToOne(() => Tag)
  tag: Tag;
}
