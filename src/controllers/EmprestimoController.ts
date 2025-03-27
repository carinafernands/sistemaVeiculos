import { parse } from 'path';
import { AppDataSource } from '../database';
import { Emprestimo } from './../entities/Emprestimo';
import { Request, Response } from "express";

export class EmprestimoController {
    static async create(req: Request, res: Response){
        const emprestimoRepo = AppDataSource.getRepository(Emprestimo);
        const {veiculoId, funcionarioId, data_saida, data_chegada, destino, status} = req.body;

        try{
            const emprestimo = emprestimoRepo.create({
                veiculo: {id: veiculoId},
                funcionario: {id: funcionarioId},
                data_saida,
                data_chegada,
                destino,
                status
            });

            await emprestimoRepo.save(emprestimo);
            return res.status(201).json(emprestimo);
        }catch(error){
            return res.status(400).json({message: "Error ao criar empréstimo", error});
        }
    }

    static async findAll(req: Request, res: Response){
        const emprestimoRepo = AppDataSource.getRepository(Emprestimo);

        try{
            const emprestimos = await emprestimoRepo.find({relations: ["veiculo", "funcionario"]});
            return res.status(200).json(emprestimos);
        }catch(error){
            return res.status(400).json({message: "Erro ao buscar empréstimos", error});
        }
    }

    static async findById(req: Request, res: Response) {
        const { id } = req.params;
        const emprestimoRepo = AppDataSource.getRepository(Emprestimo);

        try{
            const parsedId = parseInt(id, 10);

            if(isNaN(parsedId)) {
                return res.status(400).json({message: "ID inválido!"});
            }

            const emprestimo = await emprestimoRepo.findOne({
                where: { id: parsedId},
                relations: ["veiculo", "funcionario"]
            });

            if(emprestimo){
                return res.status(200).json(emprestimo);
            }else{
                return res.status(404).json({message: "Emprestimo não encontrado!"})
            }
        }catch(error){
            return res.status(400).json({message: "Erro ao buscar empréstimo", error});
        }
    }

    static async updateStatus(req: Request, res: Response){
        const { id } = req.params;
        const { status } = req.body;
        const emprestimoRepo = AppDataSource.getRepository(Emprestimo);
    
        try{

            const parsedId = parseInt(id, 10);

            if(isNaN(parsedId)){
                return res.status(400).json({message:"ID inválido!"})
            }

            const emprestimo = await emprestimoRepo.findOneBy({id: parsedId});
            if(emprestimo){
                emprestimo.status = status;
                await emprestimoRepo.save(emprestimo);
                return res.status(200).json(emprestimo);
            }else{
                return res.status(404).json({message: "Emprestimo não encontrado"});
            }
        }catch(error){
            return res.status(400).json({message: "Erro ao atualizar o status", error});
        }
    }
}