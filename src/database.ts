import "reflect-metadata";
import { DataSource } from "typeorm";
import { Veiculo } from "./entities/Veiculo";
import { Funcionario } from "./entities/Funcionario";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'sistema_veiculos',
    synchronize: true,
    logging: true,
    entities: [Veiculo, Funcionario],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => console.log("Banco de dados conectado!"))
    .catch((error) => console.error("Erro ao conectar!", error));