import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CarsComponent } from './cars.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {
    path: '',
    component: CarsComponent 
  },
  {
    path: 'maps',
    component: MapsComponent 
  },
  {
    path: '**',
    component: CarsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
