import { Component } from "@angular/core";


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })

export class pessoas {  

    foto:string = "https://static-00.iconduck.com/assets.00/profile-major-icon-512x512-xosjbbdq.png"

    public setFoto(foto:string) { this.foto = foto; }
    public getFoto():string { return this.foto; }

    constructor( public idade: number, public nome: String, foto? : string  ){}
    


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