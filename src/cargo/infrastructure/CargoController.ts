import { Request, Response } from 'express';
import { RegistrarCargoUseCase } from '../application/RegistrarCargoUseCase';

export class CargoController {
  private registrarCargoUseCase: RegistrarCargoUseCase;

  constructor(registrarCargoUseCase: RegistrarCargoUseCase) {
    this.registrarCargoUseCase = registrarCargoUseCase;
  }

  public registrarCargo(req: Request, res: Response): void {
    const {id, nombre, descripcion } = req.body;
    this.registrarCargoUseCase.execute(id, nombre, descripcion);

    res.status(200).json({ message: 'Cargo registrado exitosamente' });
  }
}
