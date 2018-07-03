import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'os-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent {
  @Input() toLabel = 'From';
  @Input() fromLabel = 'To';
  @Input() fromDateRequiredMsg = 'From date is required';
  @Input() toDateRequiredMsg = 'To date is required';
  @Output() fromDate = new EventEmitter<Date>();
  @Output() toDate = new EventEmitter<Date>();

  fromDateControl = new FormControl('', [ Validators.required ]);
  toDateControl = new FormControl('', [ Validators.required ]);

  updateFromDate = (event) => this.update(this.fromDate, event);
  updateToDate = (event) => this.update(this.toDate, event);

  private update = (emitter, event) => emitter.emit(event.value);
}
