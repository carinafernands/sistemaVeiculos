import { Router } from "express";
import { EmprestimoController } from "../controllers/EmprestimoController";

const router = Router();

router.post("/emprestimos", (req, res) => {
    EmprestimoController.create(req, res)});

router.get("/emprestimos", (req, res) => {
    EmprestimoController.findAll(req, res)});
    
router.get("/emprestimos/:id", (req, res) => {
    EmprestimoController.findById(req, res)});

router.put("/emprestimos/:id/status", (req, res) => {
    console.log("Requisição recebida!");
    EmprestimoController.updateStatus(req, res)});

export default router;