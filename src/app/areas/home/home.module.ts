import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as components from './components';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    components.HelloComponent,
    components.HomeComponent
  ]
})

export class HomeModule { }
