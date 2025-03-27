import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

import { AppDataSource } from "./database";
import veiculoRoutes from "./routes/veiculoRoutes";
import funcionarioRoutes from "./routes/funcionarioRoutes";
import emprestimoRoutes from "./routes/emprestimoRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", veiculoRoutes);
app.use("/api", funcionarioRoutes);
app.use("/api", emprestimoRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


AppDataSource.initialize()
    .then(() =>{
        console.log("BD conectado!")
    }). catch(console.error);