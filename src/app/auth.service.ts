import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private url: any = '../assets/cars.json';

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    // return this.httpClient.post(`${this.url}/login`, { email, password });
  }

  registration(data: any) {
    // return this.httpClient.post(`${this.url}/registration`, data);
  }

  resetpassword(email: string) {
    // return this.httpClient.post(`${this.url}/resetpassword`, email);
  }
}
