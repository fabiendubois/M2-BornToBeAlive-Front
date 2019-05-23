// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';

// Components
import { ReservationsComponent } from './reservations.component';

@NgModule({
  declarations: [ReservationsComponent],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    SharedModule,
    FullCalendarModule
  ]
})
export class ReservationsModule { }
