"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRouter = void 0;
const express_1 = __importDefault(require("express"));
const RegistrarClienteUseCase_1 = require("../application/RegistrarClienteUseCase");
const ObtenerClienteUseCase_1 = require("../application/ObtenerClienteUseCase");
const ActualizarClienteUseCase_1 = require("../application/ActualizarClienteUseCase");
const EliminarClienteUseCase_1 = require("../application/EliminarClienteUseCase");
const ClienteRepository_1 = require("../infrastructure/ClienteRepository");
exports.clienteRouter = express_1.default.Router();
// Inyecta el repositorio de clientes en los casos de uso
const clienteRepository = new ClienteRepository_1.ClienteRepository();
const registrarClienteUseCase = new RegistrarClienteUseCase_1.RegistrarClienteUseCase(clienteRepository);
const obtenerClienteUseCase = new ObtenerClienteUseCase_1.ObtenerClienteUseCase(clienteRepository);
const actualizarClienteUseCase = new ActualizarClienteUseCase_1.ActualizarClienteUseCase(clienteRepository);
const eliminarClienteUseCase = new EliminarClienteUseCase_1.EliminarClienteUseCase(clienteRepository);
// Ruta para crear un cliente
exports.clienteRouter.post("/", (req, res) => {
    // Obtener datos del cuerpo de la solicitud
    const { id, nombre, apellidos, edad, idCargo } = req.body;
    try {
        // Ejecutar caso de uso para crear un cliente
        registrarClienteUseCase.execute(id, nombre, apellidos, edad, idCargo);
        res.status(201).json({ message: "Cliente creado exitosamente" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el cliente" });
    }
});
// Ruta para obtener un cliente por su ID
exports.clienteRouter.get("/:id", (req, res) => {
    // Obtener ID de la ruta
    const clienteId = req.params.id;
    try {
        // Ejecutar caso de uso para obtener un cliente por su ID
        const cliente = obtenerClienteUseCase.execute(clienteId);
        res.status(200).json(cliente);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener el cliente" });
    }
});
// Ruta para actualizar un cliente
exports.clienteRouter.put("/:id", (req, res) => {
    // Obtener ID de la ruta
    const clienteId = req.params.id;
    // Obtener datos del cuerpo de la solicitud
    const { nombre, apellidos, edad, idCargo } = req.body;
    try {
        // Ejecutar caso de uso para actualizar un cliente
        actualizarClienteUseCase.execute(clienteId, nombre, apellidos, edad, idCargo);
        res.status(200).json({ message: "Cliente actualizado exitosamente" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar el cliente" });
    }
});
// Ruta para eliminar un cliente
exports.clienteRouter.delete("/:id", (req, res) => {
    // Obtener ID de la ruta
    const clienteId = req.params.id;
    try {
        // Ejecutar caso de uso para eliminar un cliente
        eliminarClienteUseCase.execute(clienteId);
        res.status(200).json({ message: "Cliente eliminado exitosamente" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el cliente" });
    }
});
