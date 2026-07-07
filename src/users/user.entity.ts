import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;
  @Column()
  email: string = '';
  @Column()
  password: string = '';
}
