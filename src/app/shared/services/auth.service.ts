import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  obtainAccessToken() {
    let username = 'fabiendubois';
    let password = 'jwtpass';

    let TOKEN_AUTH_USERNAME = 'borntobealiveclientid';
    let TOKEN_AUTH_PASSWORD = 'btbeacs135792468';

    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;

    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD),
    });

    const options = {
      headers: headers
    };

    const oauth2_token_endpoint = 'https://born-to-be-alive-api.herokuapp.com/oauth/token';

    this.httpClient.post<any>(oauth2_token_endpoint, body, options).subscribe(
      data => console.log(data),
      err => alert('Invalid Credentials'));
  }
}
