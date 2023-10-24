export class carros {


    private _nome : string;
    private _ano : number;
    
    constructor(nome:string, ano:number) {
        this._nome = nome;
        this._ano = ano;
    }
    
    get nome() : string {
        return this._nome;
    }
    
    set nome(nome:string) {
        this._nome = nome;
    }
    
    get ano() : number {
        return this._ano;
    }
    
    set ano(ano:number) {
        this._ano = ano;
    }
   

}
