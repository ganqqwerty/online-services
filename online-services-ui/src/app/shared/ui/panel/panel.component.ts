import { Component, Input } from '@angular/core';

@Component({
  selector: 'os-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  @Input() isRelatedPanel: boolean;
  @Input() isFirstPanel: boolean;

}
