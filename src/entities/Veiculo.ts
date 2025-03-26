import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("veiculos")

export class Veiculo{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    tipo!: string;

    @Column()
    modelo!: string;

    @Column()
    placa!: string;

    @Column()
    ano!: number;

    @Column({default: "Disponível"})
    status!: string;
}