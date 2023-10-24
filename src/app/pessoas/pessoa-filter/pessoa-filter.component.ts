import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pessoa-filter',
  templateUrl: './pessoa-filter.component.html',
  styleUrls: ['./pessoa-filter.component.scss']
})
export class PessoaFilterComponent implements OnInit {

  ngOnInit(): void {
    this.changeFilter("padrao");
  }
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();


  listFilter: string ="padrao"

  changeFilter(filtro:any) {
    this.filter = filtro;
    this.filterChange.emit(this.filter);
  }

}
