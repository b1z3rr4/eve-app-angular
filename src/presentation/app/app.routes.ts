import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/Home/Home.component';
import { LoginComponent } from '../pages/Login/Login.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];
