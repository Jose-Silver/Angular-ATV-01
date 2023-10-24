import { Component } from '@angular/core';
import { livros } from 'src/shared/models/livros';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent {

  livros : livros[] = [ new livros("mil e uma noites", "mohammed"),
  new livros("manifesto consumista", "Carlos marcos")];



}
