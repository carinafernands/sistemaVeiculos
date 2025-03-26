import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("funcionarios")
export class Funcionario{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome!: string;

    @Column()
    matricula!: number;
}