import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {pessoaComponent} from "./pessoas/pessoa.component"

import {NavigateComponent} from "./layout/navigate/navigate.component"
import {IndexComponent} from "./layout/index/index.component"
import {CarrosComponent} from "./carros/carros.component"
import {LivrosComponent} from "./livros/livros.component"
import PessoaDetailsComponent from './pessoas/pessoa-details/pessoa-details.component';
import { CarroDetailComponent } from './carros/carro-detail/carro-detail.component';
import { LivrosDetailsComponent } from './livros/livros-details/livros-details.component';
import { PessoaEditComponent } from './pessoas/pessoa-edit/pessoa-edit.component';

const routes: Routes = [
{path: "pessoas", component: pessoaComponent},
{path: "", component: IndexComponent},{path: "navigate", component:NavigateComponent},
{path: "carros", component: CarrosComponent},
{path: "livros", component: LivrosComponent},
{path: "pessoas/:nome", component: PessoaDetailsComponent},
{path: "carros/:nome", component: CarroDetailComponent},
{path: "livros/:titulo", component: LivrosDetailsComponent},
{path: "pessoas/:nome/editar", component: PessoaEditComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
