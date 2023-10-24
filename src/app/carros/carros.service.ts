import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { carros } from 'src/shared/models/carros';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  carros :carros[] = [new carros("vectra", 1998), 
  new carros("astra", 2002 ),
  new carros("corsa", 1996 ),
  new carros("chevete", 1995 ),
  new carros("camaro", 2016 ),
  new carros("civic", 2010 ),
  new carros("gol", 2004 ),
  new carros("cadete", 1998 )];

  getAllCarros ( ) {
    return of(this.carros);
  }

  getCarro (nome : string) {
    return of(this.carros.find(carro => carro.nome === nome));
  } 

  constructor() { }
}
