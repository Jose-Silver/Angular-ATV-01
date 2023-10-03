import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { pessoaComponent } from './pessoa.component';

describe('pessoaComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [pessoaComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(pessoaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'aula'`, () => {
    const fixture = TestBed.createComponent(pessoaComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('aula');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(pessoaComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('aula app is running!');
  });
});
