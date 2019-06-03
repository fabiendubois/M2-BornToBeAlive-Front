// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsRoutingModule } from './cars-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { CarsComponent } from './cars.component';
import { MapsComponent } from './maps/maps.component';
import { AdministrationComponent } from './administration/administration.component';
import { DeleteComponent } from './administration/dialogs/delete/delete.component';
import { AddComponent } from './administration/dialogs/add/add.component';
import { SettingsComponent } from './settings/settings.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    CarsComponent,
    MapsComponent,
    AdministrationComponent,
    DeleteComponent,
    AddComponent,
    SettingsComponent,
    ReservationComponent],
  imports: [
    CommonModule,
    CarsRoutingModule,
    SharedModule
  ],
  entryComponents: [DeleteComponent, AddComponent]
})
export class CarsModule { }
