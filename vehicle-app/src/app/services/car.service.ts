import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Observable } from 'rxjs';
import { ICar } from '../models/ICar';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http: HttpClient) {}

  getAllCars(SellRent: number): Observable<ICar[]> {
    return this.http.get('data/db.json').pipe(
      map((data) => {
        const carsArray: Array<ICar> = [];
        //const localProperties = JSON.parse(localStorage.getItem('newProp'));

        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            carsArray.push(data[id]);
          }
        }
        return carsArray;
      })
    );
    return this.http.get<ICar[]>('data/db.json');
  }
}
