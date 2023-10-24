import { Component, Input, OnInit } from '@angular/core';
import { carros } from 'src/shared/models/carros';

@Component({
  selector: 'carros-list',
  templateUrl: './carros-list.component.html',
  styleUrls: ['./carros-list.component.scss']
})
export class CarrosListComponent  {
  @Input() item :carros[] = [];


  







}
