import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { pessoas } from 'src/shared/models/pessoas';

@Component({
  selector: 'add-pessoa-form',
  templateUrl: './add-pessoa-form.component.html',
  styleUrls: ['./add-pessoa-form.component.scss']
})
export class AddPessoaFormComponent implements OnInit {

  @Output() addPessoaEvent = new EventEmitter<pessoas>();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  pessoaNome:string = "";
  pessoaIdade :number = 0;


  
//  targetPessoa() :void {
//   console.log( "pessoa clicked");
//     }
    
    addPessoa() {
      this.addPessoaEvent.emit(new pessoas(this.pessoaIdade, this.pessoaNome))
      this.pessoaIdade = 0;
      this.pessoaNome ="";
      console.log("pessoa adicionada");
    }
}
