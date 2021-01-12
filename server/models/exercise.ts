import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column("text")
  description: string;

  @Column("text")
  muscles: string;

  @Column("double")
  difficulty: number;

  @Column()
  isPublished: boolean;

  @Column()
  imgPath: string;
}
