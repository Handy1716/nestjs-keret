import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class RunCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quizId: number;

  @Column()
  runCode: number;
}
