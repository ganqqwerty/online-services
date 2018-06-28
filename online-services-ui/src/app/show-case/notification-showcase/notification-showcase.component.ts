import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'os-notification-showcase',
  templateUrl: './notification-showcase.component.html',
  styleUrls: ['./notification-showcase.component.scss']
})
export class NotificationShowcaseComponent implements OnInit {

  open = {
    success: true,
    error: true,
    warning: true,
    info: true
  };

  constructor() { }

  ngOnInit() {
  }

}
