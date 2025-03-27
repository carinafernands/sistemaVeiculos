import { Request, Response } from "express";
import { Funcionario } from "../entities/Funcionario";
import { AppDataSource } from "../database";

const funcionarioRepository = AppDataSource.getRepository(Funcionario);

export const cadastrarFuncionario = async (req: Request, res: Response): Promise <void> => {
    try{
        const { nome, matricula} = req.body;

        const novoFuncionario = funcionarioRepository.create({nome, matricula});

        await funcionarioRepository.save(novoFuncionario);

        res.status(201).json({message: "Cadastro realizado com sucesso!", funcionario: novoFuncionario});
    } catch(error){
        res.status(500).json({message: "Server error", error});
    }
};


export const listarFuncionarios = async (req: Request, res: Response): Promise<void> => {
    try{
        const funcionarios = await funcionarioRepository.find();

        if(funcionarios.length === 0){
            res.status(404).json({message:"Nenhum funcionario cadastrado!"});
        }

        res.status(200).json(funcionarios);
    }catch(error){
        res.status(500).json({message: "Server error", error});
    }
};

export const buscarFuncionario = async (req: Request, res: Response): Promise<void> => {
    try{
        const { id } = req.params;
        const funcionario = await funcionarioRepository.findOne({where: {id: parseInt(id) }});

        if(!funcionario){
            res.status(400).json({message: "Funcionario não encontrado."})
        }

        res.status(200).json(funcionario);
    } catch(error){
        res.status(500).json({message: "Server error", error});
    }
};