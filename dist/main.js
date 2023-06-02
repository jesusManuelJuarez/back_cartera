"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ClienteRouter_1 = require("./cliente/infrastructure/ClienteRouter");
const CargoRouter_1 = require("./cargo/infrastructure/CargoRouter");
const app = (0, express_1.default)();
// Configuración para el manejo de datos en formato JSON
app.use(express_1.default.json());
// Rutas para los recursos de clientes y cargos
app.use("/clientes", ClienteRouter_1.clienteRouter);
app.use("/cargos", CargoRouter_1.cargoRouter);
app.listen(3000, () => {
    console.log("[Application] Server online on port 3000");
});
