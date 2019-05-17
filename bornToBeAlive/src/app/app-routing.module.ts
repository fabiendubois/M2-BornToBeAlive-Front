import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { FullLayoutComponent } from 'src/app/shared/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
