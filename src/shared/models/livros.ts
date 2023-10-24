export class livros {

    private _titulo:string ;
    private _autor:string ;

    constructor(titulo:string, autor:string) {
        this._titulo = titulo;
        this._autor = autor;
    }
    get titulo():string {
        return this._titulo;
    }
    set titulo(value:string) {
        this._titulo = value;
    }
    get autor():string {
        return this._autor;
    }
    set autor(value:string) {
        this._autor = value;
    }

}