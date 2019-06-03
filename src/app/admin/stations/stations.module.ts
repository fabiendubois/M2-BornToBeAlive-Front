// Modules
// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationsRoutingModule } from './stations-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { StationsComponent } from './stations.component';
import { MapsComponent } from './maps/maps.component';
import { AdministrationComponent } from './administration/administration.component';
import { DeleteComponent } from './administration/dialogs/delete/delete.component';
import { AddComponent } from './administration/dialogs/add/add.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    StationsComponent,
    MapsComponent,
    AdministrationComponent,
    DeleteComponent,
    AddComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    StationsRoutingModule,
    SharedModule
  ],
  entryComponents: [
    DeleteComponent,
    AddComponent
  ]
})
export class StationsModule { }
