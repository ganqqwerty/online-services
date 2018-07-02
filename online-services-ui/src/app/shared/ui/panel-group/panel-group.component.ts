import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'os-panel-group',
  templateUrl: './panel-group.component.html',
  styleUrls: ['./panel-group.component.scss']
})
export class PanelGroupComponent {

  @Input() isRelatedPanelGroup: boolean;
  @Input() isFirstPanelGroup: boolean;

}
