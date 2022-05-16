import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../shared/modelo/usuario';
import {UsuarioService} from '../../shared/servicos/usuario.service';
import {UsuarioFirestoreService} from '../../shared/servicos/usuario-firestore.service';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.css']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios: Usuario[];
  constructor(private usuarioService: UsuarioFirestoreService) {
    this.usuarios = new Array<Usuario>();
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  removerUsuario(usuario: Usuario) {
    this.usuarioService.remover(usuario.id || '').subscribe(
      removido => {
        const indxUsuario = this.usuarios.findIndex(u => u.id === usuario.id);

        if (indxUsuario > -1) {
          this.usuarios.splice(indxUsuario, 1);
        }
      }
    );
  }

  ehMaiorDeIdade(usuario: Usuario): boolean {
    return (usuario.idade || 0) >= 18;
  }

  quantidadeUsuariosMaiorDeIdade(): number {
    return this.usuarios.filter(usuario => this.ehMaiorDeIdade(usuario)).length;
  }

}
