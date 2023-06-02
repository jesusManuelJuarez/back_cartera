import { Cargo } from '../domain/Cargo';

export class CargoRepository {
  private cargos: Cargo[] = [];

  save(cargo: Cargo): void {
    this.cargos.push(cargo);
  }

  getById(id: string): Cargo | undefined {
    return this.cargos.find((cargo) => cargo.id === id);
  }

  update(id: string, updatedCargo: Cargo): void {
    const index = this.cargos.findIndex((cargo) => cargo.id === id);
    if (index !== -1) {
      this.cargos[index] = updatedCargo;
    }
  }

  delete(id: string): void {
    const index = this.cargos.findIndex((cargo) => cargo.id === id);
    if (index !== -1) {
      this.cargos.splice(index, 1);
    }
  }
}
