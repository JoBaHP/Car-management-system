import { Component, Input, OnInit } from '@angular/core';
import { ICar } from "../../models/ICar";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {

  @Input() car: ICar;
  @Input() hideIcons: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
