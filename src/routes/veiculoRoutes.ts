import { Router } from "express";
import { buscarVeiculo, cadastrarVeiculo, listarVeiculos, excluirVeiculo } from "../controllers/VeiculoController";

const router = Router();

router.post("/veiculos", cadastrarVeiculo);
router.get("/veiculos", listarVeiculos);
router.get("/veiculos/:id", buscarVeiculo);
router.delete("/veiculos/:id", excluirVeiculo); //funcionando

export default router;