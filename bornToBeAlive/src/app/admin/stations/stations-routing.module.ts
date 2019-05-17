import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { StationsComponent } from './stations.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {
    path: '',
    component: StationsComponent 
  },
  {
    path: 'maps',
    component: MapsComponent 
  },
  {
    path: '**',
    component: StationsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationsRoutingModule { }
