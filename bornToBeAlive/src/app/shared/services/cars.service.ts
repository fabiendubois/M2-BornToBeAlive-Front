import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<any> {
    return this.httpClient.get<any>(environment.apiUrl + 'cars');
  }

  deleteCar(id: number): Observable<any> {
    return this.httpClient.delete<any>(environment.apiUrl + `cars/${id}`);
  }
}
