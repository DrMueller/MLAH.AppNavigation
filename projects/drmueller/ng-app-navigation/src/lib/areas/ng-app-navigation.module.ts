import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';
import { AppNavigationInitializationService } from './services/app-navigation-initialization.service';

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
    AppNavigationComponent
  ],
  exports: [
    RouterModule,
    AppNavigationComponent
  ]
})
export class NgAppNavigationModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgAppNavigationModule,
      providers: [
        AppNavigationInitializationService
      ]
    };
  }
}
