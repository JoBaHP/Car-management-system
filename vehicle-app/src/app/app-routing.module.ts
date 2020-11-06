import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';


const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'rent-car', component: CarListComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: 'car-detail/:id', component: CarDetailComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: '**', component: CarListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
