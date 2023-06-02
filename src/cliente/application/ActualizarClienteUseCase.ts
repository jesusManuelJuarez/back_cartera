import { Cliente } from '../domain/Cliente';
import { ClienteRepository } from '../infrastructure/ClienteRepository';

export class ActualizarClienteUseCase {
  private clienteRepository: ClienteRepository;

  constructor(clienteRepository: ClienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  public execute(id: string, nombre: string, apellidos: string, edad: number, idCargo: string): void {
    const cliente = new Cliente(id, nombre, apellidos, edad, idCargo);
    this.clienteRepository.update(id, cliente);
  }
}
