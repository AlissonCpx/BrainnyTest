import { Column, CreateDateColumn, Entity, OneToMany, BeforeInsert, PrimaryGeneratedColumn, Unique, UpdateDateColumn, BeforeUpdate, AfterInsert } from 'typeorm'
import { Registered_time } from './Redistered_time';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    role: string;
    @OneToMany(type => Registered_time, registereds => Registered_time)
    registered: Registered_time[];
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
/*
    @BeforeInsert()
    async encryptPassword() {
        console.log("Teste 123")
        this.password = await bcrypt.hash(this.password, 8);
    }
*/




}