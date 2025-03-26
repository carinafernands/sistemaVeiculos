import { Request, Response } from "express";
import { Veiculo } from "../entities/Veiculo";
import { AppDataSource } from "../database";


const veiculoRepository = AppDataSource.getRepository(Veiculo);

export const cadastrarVeiculo = async (req: Request, res: Response): Promise<void> => {
    try{
        const { tipo, modelo, placa, ano, status } = req.body;

        const novoVeiculo = veiculoRepository.create({tipo, modelo, placa, ano, status});

        await veiculoRepository.save(novoVeiculo);

        res.status(201).json({message: "Cadastro realizado com sucesso!"});
    } catch(error){
        res.status(500).json({message: "Server error", error});
    }
};
