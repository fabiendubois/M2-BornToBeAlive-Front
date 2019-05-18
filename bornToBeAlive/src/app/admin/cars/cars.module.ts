import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { CarsComponent } from './cars.component';
import { MapsComponent } from './maps/maps.component';
import { AdministrationComponent } from './administration/administration.component';

@NgModule({
  declarations: [CarsComponent, MapsComponent, AdministrationComponent],
  imports: [
    CommonModule,
    CarsRoutingModule,
    SharedModule
  ]
})
export class CarsModule { }
