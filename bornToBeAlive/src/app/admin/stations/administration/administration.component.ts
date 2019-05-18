import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  stations = [
    {
      "id": 1,
      "name": "rizomm 1",
      "power": "22",
      "marque": "G2Mobility",
      "organisation": "la catho"
    },
    {
      "id": 2,
      "name": "rizomm 2",
      "power": "11",
      "marque": "G2Mobility",
      "organisation": "la catho"
    }
  ]

  displayedColumns: string[] = ['id', 'name', 'marque', 'power', 'organisation', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.stations);
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
