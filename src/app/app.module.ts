import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { pessoaComponent } from './pessoas/pessoa.component';
import { NavigateComponent } from './layout/navigate/navigate.component';
import { CarrosComponent } from './carros/carros.component';
import { LivrosComponent } from './livros/livros.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { IndexComponent } from './layout/index/index.component';
import { AddPessoaFormComponent } from './pessoas/add-pessoa-form/add-pessoa-form.component';
import PessoaDetailsComponent from './pessoas/pessoa-details/pessoa-details.component';
import { PessoaFilterComponent } from './pessoas/pessoa-filter/pessoa-filter.component';
import { PessoaListComponent } from './pessoas/pessoa-list/pessoa-list.component';
import { CarrosListComponent } from './carros/carros-list/carros-list.component';
import { CarroDetailComponent } from './carros/carro-detail/carro-detail.component';
import { LivrosListComponent } from './livros/livros-list/livros-list.component';
import { LivrosDetailsComponent } from './livros/livros-details/livros-details.component';
import { PessoaEditComponent } from './pessoas/pessoa-edit/pessoa-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    pessoaComponent,
    NavigateComponent,
    CarrosComponent,
    LivrosComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    PessoaListComponent,
    AddPessoaFormComponent,
    PessoaFilterComponent,
    PessoaDetailsComponent,
    CarrosListComponent,
    CarroDetailComponent,
    LivrosListComponent,
    LivrosDetailsComponent,
    PessoaEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
