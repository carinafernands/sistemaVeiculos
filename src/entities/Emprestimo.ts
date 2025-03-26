import { Entity, PrimaryGeneratedColumn, ManyToOne,Column } from "typeorm";
import { Veiculo } from "./Veiculo";
import { Funcionario } from "./Funcionario";

@Entity("emprestimos")
export class Emprestimo{
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => Veiculo)
    veiculo!: Veiculo;

    @ManyToOne(() => Funcionario)
    funcionario!: Funcionario;

    @Column()
    data_saida!: Date;

    @Column()
    data_chegada!: Date;

    @Column()
    destino!: string;

    @Column({default: "Ativo"})
    status!: string;


}