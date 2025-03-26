import { Router } from "express";
import { register } from "module";
import { cadastrarVeiculo } from "../controllers/VeiculoController";

const router = Router();

router.post("/veiculos", cadastrarVeiculo);

export default router;