import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsRoutingModule } from './stations-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { StationsComponent } from './stations.component';
import { MapsComponent } from './maps/maps.component';
import { AdministrationComponent } from './administration/administration.component';

@NgModule({
  declarations: [
    StationsComponent,
    MapsComponent,
    AdministrationComponent
  ],
  imports: [
    CommonModule,
    StationsRoutingModule,
    SharedModule
  ]
})
export class StationsModule { }
