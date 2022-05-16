import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManipulacaoUsuarioComponent} from './manipulacao-usuario/manipulacao-usuario.component';
import {ListagemUsuarioComponent} from './listagem-usuario/listagem-usuario.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {BrowserModule} from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ListagemUsuarioTabelaComponent } from './listagem-usuario-tabela/listagem-usuario-tabela.component';
import {MatTableModule} from '@angular/material/table';
import {PipesModule} from '../shared/pipes/pipes.module';

@NgModule({
  declarations: [
    ManipulacaoUsuarioComponent,
    ListagemUsuarioComponent,
    ListagemUsuarioTabelaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    MatTableModule,
    PipesModule
  ],
  exports: [
    ManipulacaoUsuarioComponent,
    ListagemUsuarioComponent,
    ListagemUsuarioTabelaComponent
  ]
})
export class UsuarioModule { }
