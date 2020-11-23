import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICar } from 'src/app/models/ICar';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  public cars: ICar[];
  public SellRent = 1;

  /* = [
   {
     "id": 1,
     "brand": "BMW",
     "model": "BMW6",
     "fuel": "petrol",
     "year": 2020,
     "price": 1200,
     // engine: Engine,
     "image": "../../../assets/bmw.png"
   },
   {
     "id": 2,
     "brand": "Audi",
     "model": "R8",
     "fuel": "diesel",
     "year": 2020,
     "price": 155500,
     //engine: "diesel",
     "image": "../../../assets/audi-r8.png"
   },
   {
     "id": 3,
     "brand": "Mercedes",
     "model": "XL",
     "fuel": "hibryd",
     "year": 2020,
     "price": 1200,
     //engine: Engine,
     "image": "../../../assets/mercedes.png"
   },
   {
     "id": 4,
     "brand": "Ferrari",
     "model": "xcc",
     "fuel": "petrol",
     "year": 2020,
     "price": 1200,
     // engine: Engine,
     "image": "../../../assets/ferrari.png"
   },
   {
     "id": 5,
     "brand": "Lamborgini",
     "model": "Huracane",
     "fuel": "petrol",
     "year": 2020,
     "price": 1200,
     // engine: Engine,
     "image": "../../../assets/lamborghini.png"
   },
   {
     "id": 6,
     "brand": "Toyota",
     "model": "Yaris",
     "fuel": "electric",
     "year": 2020,
     "price": 1200,
     // engine: Engine,
     "image": "../../../assets/toyota1.png"
   },
 ] */

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; // Means we are on rent-property URL else we are on base URL
    }

    this.carService.getAllCars(this.SellRent).subscribe(
      (data) => {
        this.cars = data;
      },
      (error) => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }
  // if no service
  /* this.http.get('data/db.json').subscribe(
    data => {
      this.cars = data;
    }
  )
}
*/
}
