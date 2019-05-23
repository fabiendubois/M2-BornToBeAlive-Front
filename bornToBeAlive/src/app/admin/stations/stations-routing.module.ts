import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { StationsComponent } from './stations.component';
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
    component: StationsComponent,
    children: [
      {
        path: 'settings',
        component: AdministrationComponent
      },
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
export class StationsRoutingModule { }
