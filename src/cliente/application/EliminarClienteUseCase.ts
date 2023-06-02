import { ClienteRepository } from '../infrastructure/ClienteRepository';

export class EliminarClienteUseCase {
  private clienteRepository: ClienteRepository;

  constructor(clienteRepository: ClienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  public execute(clienteId: string): void {
    this.clienteRepository.delete(clienteId);
  }
}
