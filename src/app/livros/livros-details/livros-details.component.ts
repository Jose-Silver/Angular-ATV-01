import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../livros.service';
import { ActivatedRoute } from '@angular/router';
import { livros } from 'src/shared/models/livros';

@Component({
  selector: 'app-livros-details',
  templateUrl: './livros-details.component.html',
  styleUrls: ['./livros-details.component.scss']
})
export class LivrosDetailsComponent implements OnInit {

  livro : livros | any;
  constructor( private livroService: LivrosService, private rouute : ActivatedRoute){ };
  ngOnInit(): void {
    this.rouute.paramMap.subscribe(params => {
      let titulo = params.get('titulo');

      if (titulo) {
          this.livroService.getBytitulo(titulo).subscribe(livro => this.livro =livro)

      } 

    })
  }
  

}
