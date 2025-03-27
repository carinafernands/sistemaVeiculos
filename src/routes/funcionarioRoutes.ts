import { Router } from "express";
import { cadastrarFuncionario, buscarFuncionario, listarFuncionarios } from "../controllers/FuncionarioController";

const router = Router();

router.post("/funcionarios", cadastrarFuncionario);

router.get("/funcionarios", listarFuncionarios);

router.get("/funcionarios/:id", buscarFuncionario);

export default router;