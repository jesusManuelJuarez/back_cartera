import { Cargo } from '../domain/Cargo';
import { CargoRepository } from '../infrastructure/CargoRepository';

export class ObtenerCargoUseCase {
  private cargoRepository: CargoRepository;

  constructor(clienteRepository: CargoRepository) {
    this.cargoRepository = clienteRepository;
  }

  public execute(id: string): Cargo | undefined {
    return this.cargoRepository.getById(id);
  }
}
