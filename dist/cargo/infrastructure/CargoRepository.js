"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CargoRepository = void 0;
class CargoRepository {
    constructor() {
        this.cargos = [];
    }
    save(cargo) {
        this.cargos.push(cargo);
    }
    getById(id) {
        return this.cargos.find((cargo) => cargo.id === id);
    }
    update(id, updatedCargo) {
        const index = this.cargos.findIndex((cargo) => cargo.id === id);
        if (index !== -1) {
            this.cargos[index] = updatedCargo;
        }
    }
    delete(id) {
        const index = this.cargos.findIndex((cargo) => cargo.id === id);
        if (index !== -1) {
            this.cargos.splice(index, 1);
        }
    }
}
exports.CargoRepository = CargoRepository;
