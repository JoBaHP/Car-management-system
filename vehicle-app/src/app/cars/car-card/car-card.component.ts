import { Component, Input, OnInit } from '@angular/core';
import { ICarBase } from 'src/app/models/icarbase';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  @Input() car: ICarBase;
  @Input() hideIcons: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
