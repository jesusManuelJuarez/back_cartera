"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EliminarCargoUseCase = void 0;
class EliminarCargoUseCase {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    execute(clienteId) {
        this.clienteRepository.delete(clienteId);
    }
}
exports.EliminarCargoUseCase = EliminarCargoUseCase;
