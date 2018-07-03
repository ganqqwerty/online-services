import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

const INITIAL_VALUE = '';

@Component({
  selector: 'os-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent {
  @Input() name ;
  @Input() requiredMsg = 'Date is required';
  @Output() date = new EventEmitter<Date>();

  dateControl = new FormControl(INITIAL_VALUE, [ Validators.required ]);

  updateDate = (event) => this.update(this.date, event);

  private update = (emitter, event) => emitter.emit(event.value);
}
