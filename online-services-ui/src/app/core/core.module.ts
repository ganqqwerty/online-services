import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { SideNavigationComponent } from '../show-case/side-navigation/side-navigation.component';
import { MatListModule, MatSidenavModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { UiModule } from '../shared/ui/ui.module';


@NgModule({
  declarations: [
  SideNavigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports: [
    SideNavigationComponent
  ],
  providers: [

  ]
})
export class CoreModule {
  /**
   * Prevent reimport of CoreModule
   * @param parentModule will be `null` if {@link CoreModule} is not reimported by another module,
   * otherwise it will throw an error.
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

