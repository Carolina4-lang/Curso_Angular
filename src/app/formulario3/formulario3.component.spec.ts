import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario3Component } from './formulario3.component';

describe('Formulario3Component', () => {
  let component: Formulario3Component;
  let fixture: ComponentFixture<Formulario3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Formulario3Component]
    });
    fixture = TestBed.createComponent(Formulario3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});