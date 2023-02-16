import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  creatorId: number;

  @Column()
  name: string;

  @Column()
  public: boolean;

  @Column()
  oneRound: boolean;
}
