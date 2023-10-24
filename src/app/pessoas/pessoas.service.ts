import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { pessoas } from 'src/shared/models/pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {



  pessoasList : pessoas[] = [ new pessoas(15, "luana"),
  new pessoas(20, "Melissa"),
  new pessoas(35, "Thomas turbando"),
  new pessoas(47, "Paula vadinho"),
  new pessoas(50, "Simas turbo"),
  new pessoas(28, "Geovanna"),
  new pessoas(48, "Cuca Beludo"),
  new pessoas(66, "claudete"),
  new pessoas(88, "crista"),
  new pessoas(69, "Paula tejano")]
 
  constructor() { }
  getAllPessoas() {
    return of(this.pessoasList);
  }

  getPessoas(nome: string) {
    return of(this.pessoasList.find(pessoa => pessoa.nome === nome));

  }


}
