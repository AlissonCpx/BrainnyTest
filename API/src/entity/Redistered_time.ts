import { type } from 'os';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { User } from './User'


@Entity()
export class Registered_time {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => User, users => Registered_time, { eager: true })
    user: User;

    @Column()
    time_registered: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}