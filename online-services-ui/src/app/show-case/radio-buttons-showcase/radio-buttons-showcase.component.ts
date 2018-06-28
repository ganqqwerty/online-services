import { Component, OnInit } from '@angular/core';
import { RadioButtonItem } from '../../shared/ui/radio-buttons/radio-button-item.model';

@Component({
  selector: 'os-radio-buttons-showcase',
  templateUrl: './radio-buttons-showcase.component.html',
  styleUrls: ['./radio-buttons-showcase.component.scss']
})
export class RadioButtonsShowcaseComponent implements OnInit {

  values: Array<RadioButtonItem> = [
    {
      label: 'I am a radio button label',
      value: 'i_am_a_value'
    },
    {
      label: 'I am another radio button label',
      value: 'i_am_another_value'
    },
    {
      label: 'And more..',
      value: 'more'
    },
    {
      label: '.. and more',
      value: 'more_more'
    }
  ];


  ngOnInit() {
  }

}
