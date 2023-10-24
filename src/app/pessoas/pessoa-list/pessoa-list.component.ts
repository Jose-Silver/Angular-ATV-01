import { Component, Input } from '@angular/core';
import { pessoas } from 'src/shared/models/pessoas';

@Component({
  selector: 'pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent {

@Input() item: pessoas[] =[];

}
