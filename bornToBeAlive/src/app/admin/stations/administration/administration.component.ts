import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { StationsService } from 'src/app/shared/services/stations.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  stations;

  displayedColumns: string[] = ['id', 'name', 'marque', 'power', 'organisation', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private stationsService: StationsService) {
    this.dataSource = new MatTableDataSource(this.stations);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   }

  ngOnInit() {
    this.fetchStations();
  }

  fetchStations() {
    this.stationsService.getStations().subscribe(
      (data) => {
        this.stations = data;
        this.upDataSource(data);
      }
    );
  }

  upDataSource(data) {
    this.dataSource.data = data;
  }

  onRefresh() {
    this.stations = undefined;
    this.fetchStations();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
