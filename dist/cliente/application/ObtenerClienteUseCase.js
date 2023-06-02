"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtenerClienteUseCase = void 0;
class ObtenerClienteUseCase {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    execute(clienteId) {
        return this.clienteRepository.getById(clienteId);
    }
}
exports.ObtenerClienteUseCase = ObtenerClienteUseCase;
