import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { MatRadioModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotificationComponent,
    RadioButtonsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  entryComponents: [],
  exports: [
    NotificationComponent,
    RadioButtonsComponent
  ],
  providers: []
})
export class UiModule {
}


