import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prishtina } from './prishtina';

describe('Prishtina', () => {
  let component: Prishtina;
  let fixture: ComponentFixture<Prishtina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prishtina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prishtina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
