import { Router } from "express";
import { buscarVeiculo, cadastrarVeiculo, listarVeiculos, excluirVeiculo } from "../controllers/VeiculoController";

const router = Router();

router.post("/", cadastrarVeiculo);
router.get("/", listarVeiculos);
router.get("/:id", buscarVeiculo);
router.delete("/:id", excluirVeiculo); //funcionando

export default router;