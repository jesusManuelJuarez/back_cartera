"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepository = void 0;
class ClienteRepository {
    constructor() {
        this.clientes = [];
    }
    save(cliente) {
        this.clientes.push(cliente);
    }
    getById(id) {
        return this.clientes.find((cliente) => cliente.id === id);
    }
    update(id, updatedCliente) {
        const index = this.clientes.findIndex((cliente) => cliente.id === id);
        if (index !== -1) {
            this.clientes[index] = updatedCliente;
        }
    }
    delete(id) {
        const index = this.clientes.findIndex((cliente) => cliente.id === id);
        if (index !== -1) {
            this.clientes.splice(index, 1);
        }
    }
}
exports.ClienteRepository = ClienteRepository;
