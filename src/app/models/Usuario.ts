export class Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    dataNascimento: Date;
    criadoEm: Date;
    removidoEm?: Date;
  
    // Construtor que define CriadoEm com a data atual
    constructor() {
      this.criadoEm = new Date();
    }
  }