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

export const listarVeiculos = async (req: Request, res: Response): Promise<void> => {
    try{
        const veiculos = await veiculoRepository.find();

        if(veiculos.length === 0) {
            res.status(404).json({message: "Nenhum veiculo cadastrado"});
            return
        }

        res.status(200).json(veiculos);
    } catch (error){
        res.status(500).json({message: "Server error", error});
    }
};

export const buscarVeiculo = async (req: Request, res: Response): Promise<void> => {
    try{
        const { id } = req.params;
        const veiculo = await veiculoRepository.findOne({where: { id: parseInt(id) }});

        if(!veiculo){
            res.status(404).json({message: "Veiculo não encontrado"});
            return;
        }

        res.status(200).json(veiculo);
    } catch (error){
        res.status(500).json({message: "Server error", error});
    }
};

export const excluirVeiculo = async (req: Request, res: Response): Promise<Response> => {
    try{
        const { id } = req.params;
        const veiculo = await veiculoRepository.findOne({where: {id: parseInt(id)}});
    
        if(!veiculo){
            return res.status(404).json({message:"Veiculo não encontrado!"});
        }

        await veiculoRepository.remove(veiculo);

        return res.status(200).json({message:"Veiculo excluido com sucesso!"});
    } catch(error){
        return res.status(500).json({message:"Server error", error});
    }
};