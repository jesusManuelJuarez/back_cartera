"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EliminarClienteUseCase = void 0;
class EliminarClienteUseCase {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    execute(clienteId) {
        this.clienteRepository.delete(clienteId);
    }
}
exports.EliminarClienteUseCase = EliminarClienteUseCase;
