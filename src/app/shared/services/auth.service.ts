// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';
// // import { JwtHelperService } from '@auth0/angular-jwt';
// import { environment } from '../../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   constructor(private httpClient: HttpClient) { }

//   sign_in(): Observable<any> {
//     return this.httpClient
//       .post<any>('http://borntobealiveclientid:btbeacs135792468@born-to-be-alive-api.herokuapp.com/oauth/token?grant_type=password&username=fabiendubois&password=jwtpass', {})
//       .pipe(tap(result => {
//         console.log(result)
//       }));
//   }

// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  sign_in(): Observable<any> {

    // let oauth2_token_endpoint = 'http://born-to-be-alive-api.herokuapp.com/oauth/token?grant_type=password&username=fabiendubois&password=jwtpass';
    // let oauth2_client_id = 'borntobealiveclientid';
    // let oauth2_client_secret = 'btbeacs135792468';

    // const httpOptions =
    //  new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Accept': 'application/json',
    //     'Authorization': 'Basic ' + '(' + oauth2_client_id + ':' + oauth2_client_secret + ' )'
    //   })


    // const body = '';

    // return this.httpClient.post<any>(oauth2_token_endpoint, body, { withCredentials: true});
    let toto;
    const req = this.obtainAccessToken();
    req.subscribe(() => {
      toto = this.httpClient
        .post<any>('http://borntobealiveclientid:btbeacs135792468@born-to-be-alive-api.herokuapp.com/oauth/token?grant_type=password&username=fabiendubois&password=jwtpass', {});
    });
    return toto;
  }

  obtainAccessToken() {
    const params = new URLSearchParams();
    params.append('username', 'fabiendubois');
    params.append('password', 'jwtpass');
    params.append('grant_type', 'password');
    // params.append('client_id', 'borntobealiveclientid');

    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Authorization': 'Basic ' + btoa('borntobealiveclientid:btbeacs135792468'),
      'withCredentials': 'true'
    });

    const options = {
      headers: headers
    };

    const oauth2_token_endpoint = 'https://born-to-be-alive-api.herokuapp.com/oauth/token?grant_type=password&username=fabiendubois&password=jwtpass';

    return this.httpClient.post<any>(oauth2_token_endpoint, '', { withCredentials: true }).pipe(tap(result => {
      console.log('BITE', result);
    }));
  }
}
