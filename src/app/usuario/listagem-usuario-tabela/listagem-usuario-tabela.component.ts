import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Usuario} from '../../shared/modelo/usuario';
import {UsuarioService} from '../../shared/servicos/usuario.service';
import {ActivatedRoute} from '@angular/router';
import {UsuarioFirestoreService} from '../../shared/servicos/usuario-firestore.service';

@Component({
  selector: 'app-listagem-usuario-tabela',
  templateUrl: './listagem-usuario-tabela.component.html',
  styleUrls: ['./listagem-usuario-tabela.component.css']
})
export class ListagemUsuarioTabelaComponent implements OnInit {

  mostrarColunas = ['nome', 'idade', 'acoes'];
  public dadosTabela: MatTableDataSource<Usuario>;

  constructor(private usuarioService: UsuarioFirestoreService, private rotaAtual: ActivatedRoute) {
    this.dadosTabela = new MatTableDataSource<Usuario>();
  }

  // lt?filtro=andrei

  ngOnInit(): void {
    this.carregarDados();
  }


  carregarDados(): void {
    this.usuarioService.listar().subscribe(
      usuarios => {
        this.dadosTabela = new MatTableDataSource<Usuario>(usuarios);
        this.rotaAtual.queryParams.subscribe(params =>
        {
          this.filtrar(params['filtro']);
        });

      }
    );
  }

  filtrar(texto: string): void {
    this.dadosTabela.filter = texto.trim().toLowerCase();
  }

  removerUsuario(usuario: Usuario, indice: number) {
    this.usuarioService.remover(usuario.id || '').subscribe(
      removido => {
        this.dadosTabela.data.splice(indice, 1);
        this.dadosTabela = new MatTableDataSource<Usuario>(this.dadosTabela.data);
      }
    );
  }
}
