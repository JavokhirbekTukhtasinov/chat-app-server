import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Users')

export class UserEntity {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    @Exclude({ toPlainOnly: true })
    password: string;

    @CreateDateColumn()
    create_at: Date

}



