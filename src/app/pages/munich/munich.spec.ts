import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Munich } from './munich';

describe('Munich', () => {
  let component: Munich;
  let fixture: ComponentFixture<Munich>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Munich]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Munich);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
