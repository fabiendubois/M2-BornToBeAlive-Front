import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsRoutingModule } from './stations-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StationsComponent } from './stations.component';

@NgModule({
  declarations: [
    StationsComponent
  ],
  imports: [
    CommonModule,
    StationsRoutingModule,
    SharedModule
  ]
})
export class StationsModule { }
