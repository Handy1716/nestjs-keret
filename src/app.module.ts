import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Creator from '../entity/creator.entity';
import Quiz from 'entity/quiz.entity';
import Quiestion from 'entity/question.entity';
import Answer from 'entity/answer.entity';
import Scoreboard from 'entity/scoreboard.entity';
import Tag from 'entity/tag.entity';
import RunCode from 'entity/runcode.entity';
import QuizTag from 'entity/quizTag.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'quiz',
      // eslint-disable-next-line prettier/prettier
      entities: [Creator, Quiz, Quiestion, Answer, Scoreboard, Tag, RunCode, QuizTag],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
