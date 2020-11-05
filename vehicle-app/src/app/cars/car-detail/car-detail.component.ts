import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  public carId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carId = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params) => {
        this.carId = +params['id'];
      }
    );
  }

  onSelectNext() {
    this.carId += 1;
    this.router.navigate(['car-detail', this.carId]);
  }

}
