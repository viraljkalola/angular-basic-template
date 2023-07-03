import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  cars!: Car[];
  car!: FormGroup;

  constructor(
    private router: Router,
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.dataservice.getApiData().subscribe((data: any) => {
      this.cars = data;
    });
  }

  addCar() {
    this.router.navigateByUrl(`edit`);
  }

  editCar(car: Car) {
    this.dataservice.setData(car);
    this.router.navigateByUrl(`edit/${car.id}`);
  }

  deleteCar(index: number) {
    if (confirm('Are you sure to delete this ?')) {
      this.cars.splice(index, 1);
      this.router.navigateByUrl(`list`);
    }
  }

}
