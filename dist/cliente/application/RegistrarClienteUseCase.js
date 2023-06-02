"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarClienteUseCase = void 0;
const Cliente_1 = require("../domain/Cliente");
class RegistrarClienteUseCase {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    execute(id, nombre, apellidos, edad, idCargo) {
        const cliente = new Cliente_1.Cliente(id, nombre, apellidos, edad, idCargo);
        this.clienteRepository.save(cliente);
    }
}
exports.RegistrarClienteUseCase = RegistrarClienteUseCase;
