import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPaper } from './submit-paper';

describe('SubmitPaper', () => {
  let component: SubmitPaper;
  let fixture: ComponentFixture<SubmitPaper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitPaper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitPaper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
