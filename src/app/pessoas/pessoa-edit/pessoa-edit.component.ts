import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import eventService from 'src/app/shared/event.service';
import { pessoas } from 'src/shared/models/pessoas';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.scss']
})
export class PessoaEditComponent {

  @Input()
  pessoaSelecionada!: pessoas;



  pessoasList : pessoas [] = [];

 


constructor(private pessoaService : PessoasService){


};


ngOnInit(): void {
  this.pessoaService.getAllPessoas().subscribe(pessoas => {
    this.pessoasList = pessoas    
});

}  

pessoaFormedit = new FormGroup({

  pessoaNomeEdit: new FormControl(),
  pessoaIdadeEdit :new FormControl(),

})

  
  nome!: any;
  idade! :number;

  
  submitForm()  {

     this.idade = Number(this.pessoaFormedit.value.pessoaIdadeEdit);
     this.nome = this.pessoaFormedit.value.pessoaNomeEdit;


    // if(this.nome){
      let pessoa_edit = new pessoas(this.idade, this.nome );
      let index = this.pessoasList.indexOf(this.pessoaSelecionada)
      // this.addPessoaEvent.emit("addPessoa", pessoa)
      eventService.emit("editPessoa", [pessoa_edit, index])
      console.log( [this.pessoaSelecionada ,pessoa_edit, index])
    }

}



