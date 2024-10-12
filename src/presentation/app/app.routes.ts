import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/Home/Home.component';
import { LoginComponent } from '../pages/Login/Login.component';
import { SessionService } from '../services/Session/Session.service';
import { UnassignService } from '../services/Unassign/Unassign.service';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [SessionService]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [UnassignService]
  }
];
