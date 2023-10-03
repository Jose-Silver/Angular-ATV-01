import { Component } from '@angular/core';

import { pessoas } from 'src/shared/models/pessoas';


@Component({
  selector: 'app-root',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class pessoaComponent {
  pessoas : pessoas[] = [ new pessoas(15, "luana"),
  new pessoas(20, "Melissa"),
  new pessoas(35, "Thomas turbando"),
  new pessoas(47, "Paula vadinho"),
  new pessoas(50, "Simas turbo"),
  new pessoas(28, "Geovanna"),
  new pessoas(48, "Cuca Beludo"),
  new pessoas(66, "claudete"),
  new pessoas(88, "crista"),
  new pessoas(69, "Paula tejano")]
  title = 'aula de angular';


  pessoaNome:string = "";
  pessoaIdade :number = 0;

  targetPessoa() :void {
console.log( "pessoa clicked");
  }

  addPessoa() {
    this.pessoas.push(new pessoas(this.pessoaIdade, this.pessoaNome))
    this.pessoaIdade = 0;
    this.pessoaNome ="";
    
    console.log("pessoa adicionada");
  }
}


