import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInputComponent } from './date-input.component';

import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerInputEvent, MatDatepickerInput } from '@angular/material';

describe('DateInputComponent', () => {
  let component: DateInputComponent;
  let fixture: ComponentFixture<DateInputComponent>;
  const DATE = new Date('17-06-1981');

  const createEvent = (date) => new MatDatepickerInputEvent<Date>({} as MatDatepickerInput<Date>, {} as HTMLElement).value = date;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DateInputComponent],
      imports: [AngularMaterialModule, ReactiveFormsModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
