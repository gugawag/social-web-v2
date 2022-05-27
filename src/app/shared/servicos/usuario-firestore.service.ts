// import { Injectable } from '@angular/core';
// import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
// import {Usuario} from '../modelo/usuario';
// import {from, map, Observable} from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class UsuarioFirestoreService {
//
//   colecaoUsuarios: AngularFirestoreCollection<Usuario>;
//   NOME_COLECAO = 'usuarios';
//
//   constructor(private afs: AngularFirestore) {
//     this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
//   }
//
//   listar(): Observable<Usuario[]> {
//     return this.colecaoUsuarios.valueChanges({idField: 'id'});
//   }
//
//   inserir(usuario: Usuario): Observable<Usuario> {
//     delete usuario.id;
//     return from(this.colecaoUsuarios.add(Object.assign({}, usuario)));
//   }
//
//   pesquisarPorId(id: string): Observable<Usuario> {
//     const doc = this.colecaoUsuarios.doc(id).get();
//     doc.subscribe(d => console.log(d));
//
//     return doc.pipe(map(document => new Usuario(document.id, document.data())));
//   }
//
//   remover(id: string): Observable<void> {
//     return from(this.colecaoUsuarios.doc(id).delete());
//   }
//
//   alterar(usuario: Usuario): Observable<void> {
//     delete usuario.id;
//     return from(this.colecaoUsuarios.doc(usuario.id).update(Object.assign({}, usuario)));
//   }
//
//   listarMaioresDeIdade(): Observable<Usuario[]> {
//     let usuariosMaioresDeIdade: AngularFirestoreCollection<Usuario>;
//     usuariosMaioresDeIdade = this.afs.collection(this.NOME_COLECAO, ref=> ref.where('idade', '>', '17'));
//     return usuariosMaioresDeIdade.valueChanges();
//   }
// }
