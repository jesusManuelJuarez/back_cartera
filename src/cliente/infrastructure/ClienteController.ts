import { Request, Response } from 'express';
import { RegistrarClienteUseCase } from '../application/RegistrarClienteUseCase';

export class ClienteController {
  private registrarClienteUseCase: RegistrarClienteUseCase;

  constructor(registrarClienteUseCase: RegistrarClienteUseCase) {
    this.registrarClienteUseCase = registrarClienteUseCase;
  }

  public registrarCliente(req: Request, res: Response): void {
    const { id, nombre, apellidos, edad, idCargo } = req.body;
    this.registrarClienteUseCase.execute(id, nombre, apellidos, edad, idCargo);

    res.status(200).json({ message: 'Cliente registrado exitosamente' });
  }
}
