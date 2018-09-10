import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import * as components from './components';
import * as services from './services';

import {
  MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    components.AppNavigationComponent
  ],
  exports: [
    RouterModule,
    components.AppNavigationComponent
  ]
})
export class NgAppNavigationModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgAppNavigationModule,
      providers: [
        services.AppNavigationInitializationService
      ],
    };
  }
}
