import { Injectable } from '@angular/core';
import { Car } from './list/list.component'
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  set_data!: Car;

  private url: any = '../assets/cars.json';

  constructor(private httpClient: HttpClient) { }

  setData(data: Car) {
    this.set_data = data;
  }

  getData() {
    return this.set_data;
  }

  getApiData() {
    return this.httpClient.get(this.url);
  }

  addData(data: any) {
    // return this.httpClient.post(this.url, data);
  }

  updateData(data: any) {
    // return this.httpClient.put(this.url, data);
  }
}
