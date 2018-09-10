import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualsRoutingModule } from './individuals-routing.module';

import * as components from './components';

@NgModule({
  imports: [
    CommonModule,
    IndividualsRoutingModule
  ],
  declarations: [
    components.IndividualsComponent,
    components.HelloComponent
  ]
})
export class IndividualsModule { }
