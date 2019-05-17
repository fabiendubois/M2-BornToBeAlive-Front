import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  sign_in(): Observable<any> {
    return this.httpClient
      .post<any>('http://borntobealiveclientid:btbeacs135792468@born-to-be-alive-api.herokuapp.com/oauth/token?grant_type=password&username=fabiendubois&password=jwtpass', {})
      .pipe(tap(result => {
        console.log(result)
      }));
  }

}