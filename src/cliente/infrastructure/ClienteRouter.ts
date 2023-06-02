import express from "express";
import { RegistrarClienteUseCase } from "../application/RegistrarClienteUseCase";
import { ObtenerClienteUseCase } from "../application/ObtenerClienteUseCase";
import { ActualizarClienteUseCase } from "../application/ActualizarClienteUseCase";
import { EliminarClienteUseCase } from "../application/EliminarClienteUseCase";
import { ClienteRepository } from "../infrastructure/ClienteRepository";

export const clienteRouter = express.Router();

// Inyecta el repositorio de clientes en los casos de uso
const clienteRepository = new ClienteRepository();
const registrarClienteUseCase = new RegistrarClienteUseCase(clienteRepository);
const obtenerClienteUseCase = new ObtenerClienteUseCase(clienteRepository);
const actualizarClienteUseCase = new ActualizarClienteUseCase(clienteRepository);
const eliminarClienteUseCase = new EliminarClienteUseCase(clienteRepository);

// Ruta para crear un cliente
clienteRouter.post("/", (req, res) => {
  // Obtener datos del cuerpo de la solicitud
  const { id, nombre, apellidos, edad, idCargo } = req.body;

  try {
    // Ejecutar caso de uso para crear un cliente
    registrarClienteUseCase.execute(id, nombre, apellidos, edad,idCargo);
    res.status(201).json({ message: "Cliente creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el cliente" });
  }
});

// Ruta para obtener un cliente por su ID
clienteRouter.get("/:id", (req, res) => {
  // Obtener ID de la ruta
  const clienteId = req.params.id;

  try {
    // Ejecutar caso de uso para obtener un cliente por su ID
    const cliente = obtenerClienteUseCase.execute(clienteId);
    res.status(200).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el cliente" });
  }
});

// Ruta para actualizar un cliente
clienteRouter.put("/:id", (req, res) => {
  // Obtener ID de la ruta
  const clienteId = req.params.id;
  // Obtener datos del cuerpo de la solicitud
  const { nombre, apellidos, edad, idCargo } = req.body;

  try {
    // Ejecutar caso de uso para actualizar un cliente
    actualizarClienteUseCase.execute(clienteId, nombre, apellidos, edad, idCargo);
    res.status(200).json({ message: "Cliente actualizado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el cliente" });
  }
});

// Ruta para eliminar un cliente
clienteRouter.delete("/:id", (req, res) => {
  // Obtener ID de la ruta
  const clienteId = req.params.id;

  try {
    // Ejecutar caso de uso para eliminar un cliente
    eliminarClienteUseCase.execute(clienteId);
    res.status(200).json({ message: "Cliente eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el cliente" });
  }
});
