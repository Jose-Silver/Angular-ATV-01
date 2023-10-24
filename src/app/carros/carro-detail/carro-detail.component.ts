import { Component, OnInit } from '@angular/core';
import { CarrosService } from '../carros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carro-detail',
  templateUrl: './carro-detail.component.html',
  styleUrls: ['./carro-detail.component.scss']
})
export class CarroDetailComponent implements OnInit {

  constructor(private carroService:CarrosService, private route: ActivatedRoute ) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        let nome = params.get('nome');
        if (nome){
          this.carroService.getCarro(nome).subscribe(carros => this.carro = carros);
        }
  })}


  carro : any;



}
