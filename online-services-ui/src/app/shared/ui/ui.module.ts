import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DateInputComponent } from './date-input/date-input.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    NotificationComponent,
    RadioButtonsComponent,
    DateInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  entryComponents: [],
  exports: [
    NotificationComponent,
    RadioButtonsComponent,
    DateInputComponent
  ],
  providers: []
})
export class UiModule {
}


