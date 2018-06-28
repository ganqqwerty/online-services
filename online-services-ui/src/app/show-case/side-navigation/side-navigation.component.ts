import { Component, OnInit } from '@angular/core';
import { NavItem } from './nav-item.model';

@Component({
  selector: 'os-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  menuEntries: Array<NavItem> = [
    {
      label: 'Text Input',
      icon: 'font',
      path: 'text-input'
    },
    {
      label: 'Date Input',
      icon: 'calendar',
      path: 'date-input'
    },
    {
      label: 'File Input',
      icon: 'file',
      path: 'file-input'
    },
    {
      label: 'Button',
      icon: 'stop',
      path: 'button'
    },
    {
      label: 'Select List',
      icon: 'list-alt',
      path: 'select-list'
    },
    {
      label: 'Radio Buttons',
      icon: 'check-circle',
      path: 'radio-buttons'
    },
    {
      label: 'Checkbox',
      icon: 'check-square',
      path: 'checkbox'
    },
    {
      label: 'Stamp',
      icon: 'stamp',
      path: 'stamp'
    },
    {
      label: 'Notification',
      icon: 'comment-alt',
      path: 'notification'
    },
    {
      label: 'Action Menu',
      icon: 'bars',
      path: 'action-menu'
    },
    {
      label: 'Infinite Scroll',
      icon: 'infinity',
      path: 'infinite-scroll'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
