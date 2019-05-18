import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CarsComponent } from './cars.component';
import { MapsComponent } from './maps/maps.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'administration',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CarsComponent,
    children: [
      {
        path: 'administration',
        component: AdministrationComponent
      },
      {
        path: 'maps',
        component: MapsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'administration'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
