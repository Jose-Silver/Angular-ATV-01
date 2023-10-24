import { Component, OnInit } from '@angular/core';
import { livros } from 'src/shared/models/livros';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.scss']
})
export class LivrosListComponent implements OnInit {
 
  livros : livros [] = [];

    constructor(private livroService: LivrosService){};


 
 
  ngOnInit(): void {
    this.livroService.getAll().subscribe(livros => {
      this.livros =livros

    });
  }

}
