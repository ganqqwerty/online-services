import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'os-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() isRelatedPanel: boolean;
  @Input() isFirstPanel: boolean;

  constructor() { }

  ngOnInit() {
  }



}
