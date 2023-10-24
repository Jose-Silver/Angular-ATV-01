import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPessoaFormComponent } from './add-pessoa-form.component';

describe('AddPessoaFormComponent', () => {
  let component: AddPessoaFormComponent;
  let fixture: ComponentFixture<AddPessoaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPessoaFormComponent]
    });
    fixture = TestBed.createComponent(AddPessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
