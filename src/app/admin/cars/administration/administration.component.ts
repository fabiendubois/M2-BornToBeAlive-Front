import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';

import { CarsService } from 'src/app/shared/services/cars.service';
import { DeleteComponent } from './dialogs/delete/delete.component';
import { AddComponent } from './dialogs/add/add.component';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  cars;

  displayedColumns: string[] = ['id', 'marque', 'modele', 'autonomy', 'power_max', 'immatriculation', 'actions'];

  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private carsService: CarsService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.fetchCars();
  }

  fetchCars() {
    this.carsService.getAll().subscribe(
      (data) => {
        this.cars = data;
        this.upDataSource(data);
      }
    );
  }

  upDataSource(data) {
    this.dataSource.data = data;
  }

  onRefresh() {
    this.cars = undefined;
    this.fetchCars();
  }

  onAdd() {
    const dialogRef = this.dialog.open(AddComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onRefresh();
      }
    });
  }

  onDelete(car) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: { id: car.id, modele: car.modele, immatriculation: car.immatriculation }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onRefresh();
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
