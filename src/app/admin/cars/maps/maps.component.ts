import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/shared/services/cars.service';
import * as L from 'leaflet';

const LATITUDE_UNIV_CATHO_LILLE = 50.63275064259198;
const LONGITUDE_UNIV_CATHO_LILLE = 3.0462591273169437;
const DEFAULT_ZOOM_MAP = 20;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  stationsMap;
  mapMarker;
  cars;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.initMap();
    this.initMapMarker();
    this.fetchCars();
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
    for (const car of this.cars) {
      this.addMarker(car.latitude, car.longitude, `${car.marque} ${car.modele}`);
    }
  }

  addMarker(latitude, longitude, txt) {
    L.marker([latitude, longitude], { icon: this.mapMarker })
      .addTo(this.stationsMap)
      .bindPopup(txt, { autoClose: false })
      .openPopup();
  }

  fetchCars() {
    this.carsService.getAll().subscribe(
      (data) => {
        this.cars = data;
        this.addAllMarkers();
      }
    );
  }
}
