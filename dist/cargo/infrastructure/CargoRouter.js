"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargoRouter = void 0;
const express_1 = __importDefault(require("express"));
const RegistrarCargoUseCase_1 = require("../application/RegistrarCargoUseCase");
const ObtenerCargoUseCase_1 = require("../application/ObtenerCargoUseCase");
const ActualizarCargoUseCase_1 = require("../application/ActualizarCargoUseCase");
const EliminarCargoUseCase_1 = require("../application/EliminarCargoUseCase");
const CargoRepository_1 = require("../infrastructure/CargoRepository");
exports.cargoRouter = express_1.default.Router();
// Inyecta el repositorio de cargos en los casos de uso
const cargoRepository = new CargoRepository_1.CargoRepository();
const registrarCargoUseCase = new RegistrarCargoUseCase_1.RegistrarCargoUseCase(cargoRepository);
const obtenerCargoUseCase = new ObtenerCargoUseCase_1.ObtenerCargoUseCase(cargoRepository);
const actualizarCargoUseCase = new ActualizarCargoUseCase_1.ActualizarCargoUseCase(cargoRepository);
const eliminarCargoUseCase = new EliminarCargoUseCase_1.EliminarCargoUseCase(cargoRepository);
// Ruta para crear un cargo
exports.cargoRouter.post("/", (req, res) => {
    // Obtener datos del cuerpo de la solicitud
    const { id, nombre, descripcion } = req.body;
    try {
        // Ejecutar caso de uso para crear un cargo
        registrarCargoUseCase.execute(id, nombre, descripcion);
        res.status(201).json({ message: "Cargo creado exitosamente" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el cargo" });
    }
});
// Ruta para obtener un cargo por su ID
exports.cargoRouter.get("/:id", (req, res) => {
    // Obtener ID de la ruta
    const cargoId = req.params.id;
    try {
        // Ejecutar caso de uso para obtener un cargo por su ID
        const cargo = obtenerCargoUseCase.execute(cargoId);
        res.status(200).json(cargo);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener el cargo" });
    }
});
// Ruta para actualizar un cargo
exports.cargoRouter.put("/:id", (req, res) => {
    // Obtener ID de la ruta
    const cargoId = req.params.id;
    // Obtener datos del cuerpo de la solicitud
    const { nombre, descripcion } = req.body;
    try {
        // Ejecutar caso de uso para actualizar un cargo
        actualizarCargoUseCase.execute(cargoId, nombre, descripcion);
        res.status(200).json({ message: "Cargo actualizado exitosamente" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar el cargo" });
    }
});
// Ruta para eliminar un cargo
exports.cargoRouter.delete("/:id", (req, res) => {
    // Obtener ID de la ruta
    const cargoId = req.params.id;
    try {
        // Ejecutar caso de uso para eliminar un cargo
        eliminarCargoUseCase.execute(cargoId);
        res.status(200).json({ message: "Cargo eliminado exitosamente" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el cargo" });
    }
});
