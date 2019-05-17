import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';

// HTTP
import { HttpClientModule } from '@angular/common/http';

// Material import 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';

// Forms
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FullLayoutComponent, SimpleLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    // Material Import
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    // Forms
    ReactiveFormsModule,
    FormsModule,
    // Http
    HttpClientModule
  ],
  exports: [
    // Material Import
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    // Forms
    ReactiveFormsModule,
    FormsModule,
    // Http
    HttpClientModule
  ]
})
export class SharedModule { }
