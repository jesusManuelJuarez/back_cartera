import { Cliente } from '../domain/Cliente';
import { ClienteRepository } from '../infrastructure/ClienteRepository';

export class ObtenerClienteUseCase {
  private clienteRepository: ClienteRepository;

  constructor(clienteRepository: ClienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  public execute(clienteId: string): Cliente | undefined {
    return this.clienteRepository.getById(clienteId);
  }
}
