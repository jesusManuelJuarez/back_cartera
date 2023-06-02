"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualizarClienteUseCase = void 0;
const Cliente_1 = require("../domain/Cliente");
class ActualizarClienteUseCase {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    execute(id, nombre, apellidos, edad, idCargo) {
        const cliente = new Cliente_1.Cliente(id, nombre, apellidos, edad, idCargo);
        this.clienteRepository.update(id, cliente);
    }
}
exports.ActualizarClienteUseCase = ActualizarClienteUseCase;
