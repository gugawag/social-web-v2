import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulacaoUsuarioComponent } from './manipulacao-usuario.component';

describe('ManipulacaoUsuarioComponent', () => {
  let component: ManipulacaoUsuarioComponent;
  let fixture: ComponentFixture<ManipulacaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManipulacaoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipulacaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
