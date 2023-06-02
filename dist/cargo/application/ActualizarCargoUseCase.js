"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualizarCargoUseCase = void 0;
const Cargo_1 = require("../domain/Cargo");
class ActualizarCargoUseCase {
    constructor(cargoRepository) {
        this.cargoRepository = cargoRepository;
    }
    execute(id, nombre, descripcion) {
        const cargo = new Cargo_1.Cargo(id, nombre, descripcion);
        this.cargoRepository.update(id, cargo);
    }
}
exports.ActualizarCargoUseCase = ActualizarCargoUseCase;
