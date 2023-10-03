import { Component } from "@angular/core";


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })

export class pessoas {

    constructor( public idade: number, public nome: String){}

    public setIdade (idade : number) :void {
        this.idade = idade;
    }

    public setNome (nome: String) :void {
        this.nome =nome;
    }

}


let Jose : pessoas = new pessoas(21, "jose");
let Laura : pessoas = new pessoas(19, "Laura");
let listaPessoas : pessoas[] = [Jose,Laura];

console.log(listaPessoas);