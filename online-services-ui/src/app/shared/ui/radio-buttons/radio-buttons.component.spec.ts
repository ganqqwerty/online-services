import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonsComponent } from './radio-buttons.component';
import { MatRadioChange, MatRadioModule } from '@angular/material';

describe('RadioButtonsComponent', () => {
  let component: RadioButtonsComponent;
  let fixture: ComponentFixture<RadioButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonsComponent],
      imports: [MatRadioModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit value', () => {
    component.change.subscribe((value) => {
      expect(value).toBe('test-value');
    });
    component.valueChanged(<MatRadioChange> {source: {}, value: 'test-value'});
  });
});
