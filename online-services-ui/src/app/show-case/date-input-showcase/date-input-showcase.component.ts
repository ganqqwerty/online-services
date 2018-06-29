import { Component } from '@angular/core';

@Component({
  selector: 'os-date-input-showcase',
  templateUrl: './date-input-showcase.component.html'
})
export class DateInputShowcaseComponent {
  fromDate:Date ;
  toDate:Date ;

  updateFromDate(event) {
    this.fromDate = event;
  }

  updateToDate(event) {
    this.toDate = event;
  }
}
