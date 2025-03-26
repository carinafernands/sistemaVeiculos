import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

import { AppDataSource } from "./database";
import veiculoRoutes from "./routes/veiculoRoutes";
import { cadastrarVeiculo } from "./controllers/VeiculoController";
import { Console } from "console";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/veiculo", cadastrarVeiculo);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


AppDataSource.initialize()
    .then(() =>{
        console.log("BD conectado!")
    }). catch(console.error);