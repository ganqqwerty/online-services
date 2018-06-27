import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextInputShowcaseComponent } from './text-input-showcase/text-input-showcase.component';
import { DateInputShowcaseComponent } from './date-input-showcase/date-input-showcase.component';
import { FileInputShowcaseComponent } from './file-input-showcase/file-input-showcase.component';
import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';
import { SelectListShowcaseComponent } from './select-list-showcase/select-list-showcase.component';
import { RadioButtonsShowcaseComponent } from './radio-buttons-showcase/radio-buttons-showcase.component';
import { CheckboxShowcaseComponent } from './checkbox-showcase/checkbox-showcase.component';
import { StampShowcaseComponent } from './stamp-showcase/stamp-showcase.component';
import { NotificationShowcaseComponent } from './notification-showcase/notification-showcase.component';
import { SideNavigationOverviewShowcaseComponent } from './side-navigation-overview-showcase/side-navigation-overview-showcase.component';
import { SideNavigationWizardShowcaseComponent } from './side-navigation-wizard-showcase/side-navigation-wizard-showcase.component';
import { InfiniteScrollShowcaseComponent } from './infinite-scroll-showcase/infinite-scroll-showcase.component';
import { ActionMenuShowcaseComponent } from './action-menu-showcase/action-menu-showcase.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: SideNavigationComponent,
    children: [
      {
        path: 'text-input',
        component: TextInputShowcaseComponent
      },
      {
        path: 'date-input',
        component: DateInputShowcaseComponent
      },
      {
        path: 'file-input',
        component: FileInputShowcaseComponent
      },
      {
        path: 'button',
        component: ButtonShowcaseComponent
      },
      {
        path: 'select-list',
        component: SelectListShowcaseComponent
      },
      {
        path: 'radio-buttons',
        component: RadioButtonsShowcaseComponent
      },
      {
        path: 'checkbox',
        component: CheckboxShowcaseComponent
      },
      {
        path: 'stamp',
        component: StampShowcaseComponent
      },
      {
        path: 'notification',
        component: NotificationShowcaseComponent
      },
      {
        path: 'action-menu',
        component: ActionMenuShowcaseComponent
      },
      {
        path: 'infinite-scroll',
        component: InfiniteScrollShowcaseComponent
      },
      {
        path: 'side-navigation-wizard',
        component: SideNavigationWizardShowcaseComponent
      },
      {
        path: 'side-navigation-overview',
        component: SideNavigationOverviewShowcaseComponent
      },
      {
        path: '**',
        redirectTo: 'text-input'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShowCaseRoutingModule {
}
