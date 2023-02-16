import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Tag {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;
}
