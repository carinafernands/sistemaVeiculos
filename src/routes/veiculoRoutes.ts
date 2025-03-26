import { Router } from "express";
import { cadastrarVeiculo, listarVeiculos } from "../controllers/VeiculoController";

const router = Router();

router.post("/veiculos", cadastrarVeiculo);

router.get("/veiculos", listarVeiculos);

export default router;