import express from "express";
import cors from "cors";
import { AppDataSource } from "./database";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});

