import { Cliente } from '../domain/Cliente';

export class ClienteRepository {
  private clientes: Cliente[] = [];

  save(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  getById(id: string): Cliente | undefined {
    return this.clientes.find((cliente) => cliente.id === id);
  }

  update(id: string, updatedCliente: Cliente): void {
    const index = this.clientes.findIndex((cliente) => cliente.id === id);
    if (index !== -1) {
      this.clientes[index] = updatedCliente;
    }
  }

  delete(id: string): void {
    const index = this.clientes.findIndex((cliente) => cliente.id === id);
    if (index !== -1) {
      this.clientes.splice(index, 1);
    }
  }
}
