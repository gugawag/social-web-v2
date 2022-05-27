export class Usuario {

  id?: number;
  nome?: string;
  cpf?: string;
  idade?: number;

  constructor(id?: number, usuario: Usuario = {}) {
    this.id = id;
    this.cpf = usuario.cpf;
    this.idade = usuario.idade;
    this.nome = usuario.nome;
  }

}
