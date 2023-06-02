import { Cargo } from '../domain/Cargo';
import { CargoRepository } from '../infrastructure/CargoRepository';

export class RegistrarCargoUseCase {
  private cargoRepository: CargoRepository;

  constructor(cargoRepository: CargoRepository) {
    this.cargoRepository = cargoRepository;
  }

  public execute(id : string, nombre: string, descripcion: string): void {
    const cargo = new Cargo(id, nombre, descripcion);
    this.cargoRepository.save(cargo);
  }
}
