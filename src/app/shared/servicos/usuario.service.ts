import { Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_USUARIOS = 'http://localhost:8080/usuarios';

  constructor(private clienteHttp: HttpClient) { }

  listar(): Observable<Usuario[]> {
  // GET /usuarios/
    return this.clienteHttp.get<Usuario[]>(this.URL_USUARIOS);
  }

  listarUsuariosJoao(nomePesquisado: string): Observable<Usuario[]> {
    return this.clienteHttp.get<Usuario[]>(`${this.URL_USUARIOS}?nome=${nomePesquisado}`);
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.clienteHttp.post<Usuario>(this.URL_USUARIOS, usuario);
  }

  remover(id: number): Observable<object> {
    // DELETE /usuarios/id
    return this.clienteHttp.delete(`${this.URL_USUARIOS}/${id}`);
  }

  alterar(usuarioNovosValores: Usuario): Observable<Usuario> {
    // PUT /usuarios/id
    return this.clienteHttp.put<Usuario>(`${this.URL_USUARIOS}/${usuarioNovosValores.id}`, usuarioNovosValores);
  }

  pesquisarPorId(id: number): Observable<Usuario> {
    // GET /usuarios/id
    return this.clienteHttp.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }
}
