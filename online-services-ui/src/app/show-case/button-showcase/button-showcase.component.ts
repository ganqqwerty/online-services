import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'os-button-showcase',
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss']
})
export class ButtonShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buttonClicked(type: string) {
    alert(`${type} button clicked!`);
  }
}
