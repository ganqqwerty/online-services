import { NgModule } from '@angular/core';
import { TextInputShowcaseComponent } from './text-input-showcase/text-input-showcase.component';
import { CommonModule } from '@angular/common';
import { DateInputShowcaseComponent } from './date-input-showcase/date-input-showcase.component';
import { FileInputShowcaseComponent } from './file-input-showcase/file-input-showcase.component';
import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';
import { SelectListShowcaseComponent } from './select-list-showcase/select-list-showcase.component';
import { RadioButtonsShowcaseComponent } from './radio-buttons-showcase/radio-buttons-showcase.component';
import { CheckboxShowcaseComponent } from './checkbox-showcase/checkbox-showcase.component';
import { StampShowcaseComponent } from './stamp-showcase/stamp-showcase.component';
import { NotificationShowcaseComponent } from './notification-showcase/notification-showcase.component';
import { ActionMenuShowcaseComponent } from './action-menu-showcase/action-menu-showcase.component';
import { InfiniteScrollShowcaseComponent } from './infinite-scroll-showcase/infinite-scroll-showcase.component';
import { SideNavigationWizardShowcaseComponent } from './side-navigation-wizard-showcase/side-navigation-wizard-showcase.component';
import { SideNavigationOverviewShowcaseComponent } from './side-navigation-overview-showcase/side-navigation-overview-showcase.component';
import { MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { ShowCaseRoutingModule } from './show-case-routing.module';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { UiModule } from '../shared/ui/ui.module';

@NgModule({
  declarations: [
    TextInputShowcaseComponent,
    DateInputShowcaseComponent,
    FileInputShowcaseComponent,
    ButtonShowcaseComponent,
    SelectListShowcaseComponent,
    RadioButtonsShowcaseComponent,
    CheckboxShowcaseComponent,
    StampShowcaseComponent,
    NotificationShowcaseComponent,
    ActionMenuShowcaseComponent,
    InfiniteScrollShowcaseComponent,
    SideNavigationWizardShowcaseComponent,
    SideNavigationOverviewShowcaseComponent,
    SideNavigationComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatSidenavModule,
    ShowCaseRoutingModule,
    MatToolbarModule,
    UiModule
  ],
  entryComponents: [],
  exports: [
  ],
  providers: []
})
export class ShowCaseModule {
}


