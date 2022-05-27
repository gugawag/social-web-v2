import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../shared/modelo/usuario';
import {ActivatedRoute, Router} from '@angular/router';
import {UsuarioService} from '../../shared/servicos/usuario.service';
import {MensagemService} from '../../shared/servicos/mensagem.service';

@Component({
  selector: 'app-manipulacao-usuario',
  templateUrl: './manipulacao-usuario.component.html',
  styleUrls: ['./manipulacao-usuario.component.css'],
})
export class ManipulacaoUsuarioComponent implements OnInit {

  usuarioDeManipulacao = new Usuario(undefined);
  titulo = 'Cadastrando';
  operacaoCadastro = true;

  constructor(private rotaAtual: ActivatedRoute,
              private roteador: Router, private usuarioService: UsuarioService,
              private mensagemService: MensagemService) {
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      // editando
      this.titulo = 'Editando'
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.usuarioService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioAEditar => this.usuarioDeManipulacao = usuarioAEditar
      );

    }
  }

  ngOnInit(): void {
  }

  manipularUsuario(): void {
    if (this.operacaoCadastro) {
      this.usuarioService.inserir(this.usuarioDeManipulacao).subscribe(
        {
          next: () => {
            this.mensagemService.error('Usuário cadastrado com sucesso!');
            this.roteador.navigate(['listarusuarios']);
          },
          error: err => {
            this.mensagemService.error(err.message);
          }
        }
      );
    } else {
      this.usuarioService.alterar(this.usuarioDeManipulacao).subscribe(
        () => this.roteador.navigate(['listarusuarios'])
      );
    }

  }

}
