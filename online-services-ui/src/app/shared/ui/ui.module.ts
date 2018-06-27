import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [],
  exports: [
    NotificationComponent
  ],
  providers: []
})
export class UiModule {
}


