import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { CarsService } from 'src/app/shared/services/cars.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  cars;

  displayedColumns: string[] = ['id', 'marque', 'modele', 'autonomy', 'power_max', 'immatriculation', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private carsService: CarsService) {
    this.dataSource = new MatTableDataSource(this.cars);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.fetchCars();
  }

  fetchCars() {
    this.carsService.getCars().subscribe(
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
