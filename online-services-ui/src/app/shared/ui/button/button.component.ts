import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';

/**
 * List of classes to add to MatButton instances based on host attributes to
 * style as different variants.
 */
const BUTTON_HOST_ATTRIBUTES = [
  'os-default-button',
  'os-primary-button',
  'os-link-button',
  'os-icon-button'
];

@Component({
  selector: 'button[os-default-button], button[os-primary-button], button[os-link-button], button[os-icon-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[disabled]': 'disabled || null',
    '[class]': 'type'
  }
})
export class ButtonComponent implements OnInit {

  @Input() disabled: boolean;

  type = BUTTON_HOST_ATTRIBUTES[0];

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this.hasHostAttributes(attr)) {
        this.type = attr;
      }
    }
  }

  private hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this.elementRef.nativeElement.hasAttribute(attribute));
  }
}
