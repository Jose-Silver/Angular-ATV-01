import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pessoas } from 'src/shared/models/pessoas';
import { PessoasService } from '../pessoas.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pessoa-details',
  templateUrl: './pessoa-details.component.html',
  styleUrls: ['./pessoa-details.component.scss']
})
export default class PessoaDetailsComponent implements OnInit{
  
  
  pessoa: any = {};
  backgroundImage: string = "";


  
  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {

      
      let nome = params.get('nome');
      if (nome){
        this.PessoasService.getPessoas(nome).subscribe(pessoas => this.pessoa = pessoas);        
      }

  })
  this.backgroundImage = this.pessoa.foto

}

  constructor(private  PessoasService: PessoasService, private route : ActivatedRoute){}

}
