import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { FullLayoutComponent } from 'src/app/shared/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './shared/simple-layout/simple-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  },
  {
    path: 'admin',
    component: FullLayoutComponent,
    children: [
      {
        path: 'cars',
        loadChildren: './admin/cars/cars.module#CarsModule'
      },
      {
        path: 'stations',
        loadChildren: './admin/stations/stations.module#StationsModule'
      },
      {
        path: '**',
        redirectTo: 'cars',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
