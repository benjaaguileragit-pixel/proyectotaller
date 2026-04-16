import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piedepagina } from './piedepagina';

describe('Piedepagina', () => {
  let component: Piedepagina;
  let fixture: ComponentFixture<Piedepagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Piedepagina],
    }).compileComponents();

    fixture = TestBed.createComponent(Piedepagina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
