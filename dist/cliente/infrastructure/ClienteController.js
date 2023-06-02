"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteController = void 0;
class ClienteController {
    constructor(registrarClienteUseCase) {
        this.registrarClienteUseCase = registrarClienteUseCase;
    }
    registrarCliente(req, res) {
        const { id, nombre, apellidos, edad, idCargo } = req.body;
        this.registrarClienteUseCase.execute(id, nombre, apellidos, edad, idCargo);
        res.status(200).json({ message: 'Cliente registrado exitosamente' });
    }
}
exports.ClienteController = ClienteController;
