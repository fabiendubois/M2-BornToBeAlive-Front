import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { StationsService } from 'src/app/shared/services/stations.service';
import { DeleteComponent } from './dialogs/delete/delete.component';
import { AddComponent } from './dialogs/add/add.component';

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

  constructor(private stationsService: StationsService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.stations);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.fetchStations();
  }

  fetchStations() {
    this.stationsService.getAll().subscribe(
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

  onDelete(station) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: { id: station.id, name: station.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onRefresh();
      }
    });
  }

  onAdd() {
    const dialogRef = this.dialog.open(AddComponent);

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
