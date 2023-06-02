"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtenerCargoUseCase = void 0;
class ObtenerCargoUseCase {
    constructor(clienteRepository) {
        this.cargoRepository = clienteRepository;
    }
    execute(id) {
        return this.cargoRepository.getById(id);
    }
}
exports.ObtenerCargoUseCase = ObtenerCargoUseCase;
