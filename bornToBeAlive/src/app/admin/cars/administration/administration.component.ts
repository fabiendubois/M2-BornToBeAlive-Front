import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  cars = [
    {
      "id": 1,
      "modele": "zoe",
      "marque": "renault",
      "immatriculation": 'DX-567-JE',
      "autonomy": 200,
      "power_max": 24
    },
    {
      "id": 2,
      "modele": "modele S",
      "marque": "tesla",
      "immatriculation": 'WW-867-JX',
      "autonomy": 500,
      "power_max": 24
    },
  ]

  displayedColumns: string[] = ['id', 'marque', 'modele', 'autonomy', 'power_max', 'immatriculation', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.cars);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
