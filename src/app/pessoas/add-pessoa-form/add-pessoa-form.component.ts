import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { pessoas } from 'src/shared/models/pessoas';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import  EventService  from '../../shared/event.service';
import eventService from '../../shared/event.service';


@Component({
  selector: 'add-pessoa-form',
  templateUrl: './add-pessoa-form.component.html',
  styleUrls: ['./add-pessoa-form.component.scss']
})
export class AddPessoaFormComponent implements OnInit {

  @Output() addPessoaEvent = new EventEmitter<pessoas>();

  ngOnInit(): void {
  }

pessoaForm = new FormGroup({

  pessoaNome: new FormControl("", Validators.required),
  pessoaIdade :new FormControl("",[ Validators.required]),

})

  
  nome!: any;
  idade! :number;

  
  submitForm()  {


    
     this.idade = Number(this.pessoaForm.value.pessoaIdade);
     this.nome = this.pessoaForm.value.pessoaNome;


    if(this.nome){
      let pessoa = new pessoas(this.idade, this.nome );
      // this.addPessoaEvent.emit("addPessoa", pessoa)
      eventService.emit("addPessoa", pessoa)
      console.log(pessoa)
    }

    
 

  }

    
    addPessoa() {
      // this.addPessoaEvent.emit(new pessoas(this.pessoaIdade, this.pessoaForm))
      // this.pessoaIdade = 0;
      // this.pessoaNome ="";
      // console.log("pessoa adicionada");


    }
}
