export class Cliente {
    id : string;
    nombre: string;
    apellido: string;
    edad: number;
    idCargo : string;
  
    constructor(id: string,nombre: string, apellido: string, edad: number, idCargo : string) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.idCargo = idCargo;
    }
  
  }
  