import express from "express";
import { clienteRouter } from "./cliente/infrastructure/ClienteRouter";
import { cargoRouter } from "./cargo/infrastructure/CargoRouter";

const app = express();

// Configuración para el manejo de datos en formato JSON
app.use(express.json());

// Rutas para los recursos de clientes y cargos
app.use("/clientes", clienteRouter);
app.use("/cargos", cargoRouter);

app.listen(3000, () => {
  console.log("[Application] Server online on port 3000");
});