export class Usuario {

  id?: string;
  nome?: string;
  cpf?: string;
  idade?: number;

  constructor(id?: string, usuario: Usuario = {}) {
    this.id = id;
    this.cpf = usuario.cpf;
    this.idade = usuario.idade;
    this.nome = usuario.nome;
  }

}
