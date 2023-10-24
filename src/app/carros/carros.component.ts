import { Component, OnInit } from '@angular/core';
import { carros } from 'src/shared/models/carros';
import { CarrosService } from './carros.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit {
  constructor(private carrosService: CarrosService) {};

  item : carros[] = [];

  
  ngOnInit(): void {

  this.carrosService.getAllCarros().subscribe(carro => {

  this.item = carro

  })
  


};



}
