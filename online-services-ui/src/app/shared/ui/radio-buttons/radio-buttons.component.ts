import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { RadioButtonItem } from './radio-button-item.model';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'os-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class RadioButtonsComponent implements OnInit {

  @Input() formControl: AbstractControl;
  @Input() items: Array<RadioButtonItem>;
  @Input() horizontal = false;
  @Output() change = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  valueChanged(radioChange: MatRadioChange) {
    this.change.emit(radioChange.value);
  }
}
