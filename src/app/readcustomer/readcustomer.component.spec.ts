import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadcustomerComponent } from './readcustomer.component';

describe('ReadcustomerComponent', () => {
  let component: ReadcustomerComponent;
  let fixture: ComponentFixture<ReadcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
