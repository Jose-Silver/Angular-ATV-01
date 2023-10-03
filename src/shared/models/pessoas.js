"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoas = void 0;
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
var pessoas = /** @class */ (function () {
    function pessoas(idade, nome) {
        this.idade = idade;
        this.nome = nome;
    }
    pessoas.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    pessoas.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    return pessoas;
}());
exports.pessoas = pessoas;
var Jose = new pessoas(21, "jose");
var Laura = new pessoas(19, "Laura");
var listaPessoas = [Jose, Laura];
console.log(listaPessoas);
