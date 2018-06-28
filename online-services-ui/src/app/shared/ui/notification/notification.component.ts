import { Component, Input, OnInit } from '@angular/core';
import { NotificationType } from './notification-type.enum';

@Component({
  selector: 'os-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() type: NotificationType;
  @Input() message: string;
  @Input() additionalText?: string;

  constructor() { }

  ngOnInit() {
  }

  getIconClass(type: NotificationType): string {
    switch (type) {
      case NotificationType.ERROR:
        return 'fas fa-ban';
      case NotificationType.INFO:
        return 'fas fa-info';
      case NotificationType.SUCCESS:
        return 'fas fa-check';
      case NotificationType.WARNING:
        return 'fas fa-exclamation';
    }
  }

}
