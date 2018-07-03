import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateInputComponent } from './date-input.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerInputEvent, MatDatepickerInput } from '@angular/material';
import { EventEmitter } from '@angular/core';

describe('DateInputComponent', () => {
  let component: DateInputComponent;
  let fixture: ComponentFixture<DateInputComponent>;
  const DATE = new Date(1981, 6, 17);

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

  it('should updateDate emit a date', () => {
    component.date.subscribe((value) => expect(value).toBe(DATE));

    component.updateDate(createEvent(DATE));
  });

  function createEvent(date) {
    const event = new MatDatepickerInputEvent<Date>({} as MatDatepickerInput<Date>, {} as HTMLElement);
    event.value = date;
    return event;
  }
});
