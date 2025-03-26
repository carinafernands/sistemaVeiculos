import { Router } from "express";
import { buscarVeiculo, cadastrarVeiculo, listarVeiculos } from "../controllers/VeiculoController";

const router = Router();

router.post("/veiculos", cadastrarVeiculo);

router.get("/veiculos", listarVeiculos);

router.get("/veiculos/:id", buscarVeiculo);

export default router;