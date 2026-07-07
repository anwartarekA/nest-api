import { Entity, Column, PrimaryGeneratedColumn, AfterInsert } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number = 1;
  @Column()
  email: string = '';
  @Column()
  password: string = '';
  @AfterInsert()
  logInsert() {
    console.log('Inserted user with id', this.id);
  }
}
