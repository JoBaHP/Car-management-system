import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { Router } from '@angular/router';
import { ICar } from '../../models/ICar';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  @ViewChild('Form') addCarForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  furnishTypes: Array<string> = ['Brand New', 'Semi New', 'Used']
  carTypes: Array<string> = ['SUV', 'Economy', 'hatchback', 'sedan']

  carView: ICar = {
    id: null,
    brand: '',
    price: null,
    model: null,
    SellRent: null,
    fuel: null,
    year: null,
    image: ''
  };


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log(this.addCarForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}
