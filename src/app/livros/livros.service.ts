import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { livros } from 'src/shared/models/livros';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

livros : livros [] = [
new livros("harry potter", "JKR"),
new livros("mein kampf", "..."),
new livros("Sapiens", "Um asiatico ai"),
new livros("Arte da guerra", "xim jim ping kkkk"),
new livros("Senhor dos aneis", "JRtoken")]


  constructor() { }

  getAll() { return of(this.livros); }

  getBytitulo(titulo: string) {
    return of(this.livros.find(livros => livros.titulo === titulo));
  }

}
