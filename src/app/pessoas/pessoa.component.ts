import { Component, OnInit } from '@angular/core';

import { pessoas } from 'src/shared/models/pessoas';
import { PessoasService } from './pessoas.service';


@Component({
  selector: 'app-root',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class pessoaComponent  implements OnInit {
  title = 'aula de angular';
  pessoaNome:string = "";
  pessoaIdade :number = 0;
  item: pessoas[] =[];
  listFilter: string ="padrao"
  filter: any;
  pessoasList : pessoas [] = [];

  constructor(private pessoasService: PessoasService) { }
  ngOnInit(): void {
    this.pessoasService.getAllPessoas().subscribe(pessoas => {
      this.pessoasList = pessoas    
  })}


 get pessoasVisiel(): any {
  let filtro = this.filter
  if (filtro === "padrao") {
     return  this.pessoasList;
    
  } else if (filtro === "acima-de-30") {

    return this.pessoasList.filter(pessoas => pessoas.idade > 30);

  }
 }
 targetPessoa() :void {
console.log( "pessoa clicked");
  }


}


