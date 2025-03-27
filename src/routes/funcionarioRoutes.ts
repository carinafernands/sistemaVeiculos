import { Router } from "express";
import { cadastrarFuncionario, buscarFuncionario, listarFuncionarios, excluirFuncionario } from "../controllers/FuncionarioController";

const router = Router();

router.post("/funcionarios", cadastrarFuncionario);
router.get("/funcionarios", listarFuncionarios);
router.get("/funcionarios/:id", buscarFuncionario);
router.delete("/funcionarios/:id", excluirFuncionario); //funcionando

export default router;