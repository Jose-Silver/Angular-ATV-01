import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {pessoaComponent} from "./pessoas/pessoa.component"

const routes: Routes = [{path: "", component: pessoaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
