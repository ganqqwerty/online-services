import { Component } from '@angular/core';

@Component({
  selector: 'os-date-input-showcase',
  templateUrl: './date-input-showcase.component.html'
})
export class DateInputShowcaseComponent {
  date: string;

  updateDate(event) {
    this.date = event.toDateString();
  }
}
