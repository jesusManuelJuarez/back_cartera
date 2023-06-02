"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoController = void 0;
class CargoController {
    constructor(registrarCargoUseCase) {
        this.registrarCargoUseCase = registrarCargoUseCase;
    }
    registrarCargo(req, res) {
        const { id, nombre, descripcion } = req.body;
        this.registrarCargoUseCase.execute(id, nombre, descripcion);
        res.status(200).json({ message: 'Cargo registrado exitosamente' });
    }
}
exports.CargoController = CargoController;
