import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

import { CarsService } from 'src/app/shared/services/cars.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  models;

  displayedColumns: string[] = ['id', 'marque', 'modele', 'description', 'autonomie', 'typePrise', 'actions'];

  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private carsService: CarsService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.fetchModels();
  }

  fetchModels() {
    this.carsService.getModels().subscribe(
      (data) => {
        this.models = data;
        this.upDataSource(data);
      }
    );
  }

  upDataSource(data) {
    this.dataSource.data = data;
  }

  // onDelete(modele) {
  //   const dialogRef = this.dialog.open(DeleteComponent, {
  //     data: { id: modele.id, marque: modele.marque, modele: modele.modele }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.onRefresh();
  //     }
  //   });
  // }

  onRefresh() {
    this.models = undefined;
    this.fetchModels();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
