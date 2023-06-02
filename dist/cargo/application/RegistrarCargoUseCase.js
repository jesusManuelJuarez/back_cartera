"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarCargoUseCase = void 0;
const Cargo_1 = require("../domain/Cargo");
class RegistrarCargoUseCase {
    constructor(cargoRepository) {
        this.cargoRepository = cargoRepository;
    }
    execute(id, nombre, descripcion) {
        const cargo = new Cargo_1.Cargo(id, nombre, descripcion);
        this.cargoRepository.save(cargo);
    }
}
exports.RegistrarCargoUseCase = RegistrarCargoUseCase;
