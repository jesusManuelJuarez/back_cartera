import { CargoRepository } from '../infrastructure/CargoRepository';

export class EliminarCargoUseCase {
  private clienteRepository: CargoRepository;

  constructor(clienteRepository: CargoRepository) {
    this.clienteRepository = clienteRepository;
  }

  public execute(clienteId: string): void {
    this.clienteRepository.delete(clienteId);
  }
}
