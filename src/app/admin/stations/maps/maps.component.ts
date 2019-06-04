import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { StationsService } from 'src/app/shared/services/stations.service';

const LATITUDE_UNIV_CATHO_LILLE = 50.63275064259198;
const LONGITUDE_UNIV_CATHO_LILLE = 3.0462591273169437;
const DEFAULT_ZOOM_MAP = 20;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  stations;
  stationsMap;
  mapMarker;

  constructor(private stationsService: StationsService) { }

  ngOnInit() {
    this.initMap();
    this.initMapMarker();
    this.fetchStations();
  }

  initMap() {
    this.stationsMap = L.map('stationsMap').setView([LATITUDE_UNIV_CATHO_LILLE, LONGITUDE_UNIV_CATHO_LILLE], DEFAULT_ZOOM_MAP);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.stationsMap);
  }

  initMapMarker() {
    this.mapMarker = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
      iconSize: [25, 41], // taille de l’icône
      iconAnchor: [12, 41] // point d’ancrage
    });
  }

  addAllMarkers() {
    for (const station of this.stations) {
      this.addMarker(station.latitude, station.longitude, station.name);
    }
  }

  addMarker(latitude, longitude, txt) {
    L.marker([latitude, longitude], { icon: this.mapMarker })
      .addTo(this.stationsMap)
      .bindPopup(txt, { autoClose: false })
      .openPopup();
  }

  fetchStations() {
    this.stationsService.getAll().subscribe(
      (data) => {
        this.stations = data;
        this.addAllMarkers();
      }
    );
  }

}
