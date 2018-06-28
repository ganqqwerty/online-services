import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { MatRadioModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { PanelGroupComponent } from './panel-group/panel-group.component';


@NgModule({
  declarations: [
    NotificationComponent,
    RadioButtonsComponent,
    PanelComponent,
    PanelGroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  entryComponents: [],
  exports: [
    NotificationComponent,
    RadioButtonsComponent,
    PanelComponent,
    PanelGroupComponent
  ],
  providers: []
})
export class UiModule {
}


