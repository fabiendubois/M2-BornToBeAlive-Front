// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { StationsComponent } from './stations.component';
import { MapsComponent } from './maps/maps.component';
import { AdministrationComponent } from './administration/administration.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reservation',
    pathMatch: 'full'
  },
  {
    path: '',
    component: StationsComponent,
    children: [
      {
        path: 'reservation',
        component: ReservationComponent
      },
      {
        path: 'administration',
        component: AdministrationComponent
      },
      {
        path: 'maps',
        component: MapsComponent
      },
      {
        path: 'settings',
        component: AdministrationComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'reservation'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationsRoutingModule { }
