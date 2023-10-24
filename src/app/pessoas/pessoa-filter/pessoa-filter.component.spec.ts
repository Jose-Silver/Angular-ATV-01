import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFilterComponent } from './pessoa-filter.component';

describe('PessoaFilterComponent', () => {
  let component: PessoaFilterComponent;
  let fixture: ComponentFixture<PessoaFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaFilterComponent]
    });
    fixture = TestBed.createComponent(PessoaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
