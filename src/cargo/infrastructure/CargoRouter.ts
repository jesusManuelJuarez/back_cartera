import express from "express";
import { RegistrarCargoUseCase } from "../application/RegistrarCargoUseCase";
import { ObtenerCargoUseCase } from "../application/ObtenerCargoUseCase";
import { ActualizarCargoUseCase } from "../application/ActualizarCargoUseCase";
import { EliminarCargoUseCase } from "../application/EliminarCargoUseCase";
import { CargoRepository } from "../infrastructure/CargoRepository";

export const cargoRouter = express.Router();

// Inyecta el repositorio de cargos en los casos de uso
const cargoRepository = new CargoRepository();
const registrarCargoUseCase = new RegistrarCargoUseCase(cargoRepository);
const obtenerCargoUseCase = new ObtenerCargoUseCase(cargoRepository);
const actualizarCargoUseCase = new ActualizarCargoUseCase(cargoRepository);
const eliminarCargoUseCase = new EliminarCargoUseCase(cargoRepository);

// Ruta para crear un cargo
cargoRouter.post("/", (req, res) => {
  // Obtener datos del cuerpo de la solicitud
  const { id, nombre, descripcion } = req.body;

  try {
    // Ejecutar caso de uso para crear un cargo
    registrarCargoUseCase.execute(id, nombre, descripcion);
    res.status(201).json({ message: "Cargo creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el cargo" });
  }
});

// Ruta para obtener un cargo por su ID
cargoRouter.get("/:id", (req, res) => {
  // Obtener ID de la ruta
  const cargoId = req.params.id;

  try {
    // Ejecutar caso de uso para obtener un cargo por su ID
    const cargo = obtenerCargoUseCase.execute(cargoId);
    res.status(200).json(cargo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el cargo" });
  }
});

// Ruta para actualizar un cargo
cargoRouter.put("/:id", (req, res) => {
  // Obtener ID de la ruta
  const cargoId = req.params.id;
  // Obtener datos del cuerpo de la solicitud
  const { nombre, descripcion } = req.body;

  try {
    // Ejecutar caso de uso para actualizar un cargo
    actualizarCargoUseCase.execute(cargoId, nombre, descripcion);
    res.status(200).json({ message: "Cargo actualizado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el cargo" });
  }
});

// Ruta para eliminar un cargo
cargoRouter.delete("/:id", (req, res) => {
  // Obtener ID de la ruta
  const cargoId = req.params.id;

  try {
    // Ejecutar caso de uso para eliminar un cargo
    eliminarCargoUseCase.execute(cargoId);
    res.status(200).json({ message: "Cargo eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el cargo" });
  }
});
