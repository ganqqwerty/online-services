import { Component } from '@angular/core';

@Component({
  selector: 'os-date-input-showcase',
  templateUrl: './date-input-showcase.component.html'
})
export class DateInputShowcaseComponent {
  fromDate: string;
  toDate: string;

  updateFromDate(event) {
    this.fromDate = event.toDateString();
  }

  updateToDate(event) {
    this.toDate = event.toDateString();
  }
}
