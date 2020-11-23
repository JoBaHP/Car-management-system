import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarCardComponent } from './cars/car-card/car-card.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from './services/car.service';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CarListComponent,
    NavBarComponent,
    AddCarComponent,
    CarDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [CarService, UserServiceService, AlertifyService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
