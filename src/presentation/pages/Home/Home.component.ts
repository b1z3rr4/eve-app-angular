import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Auth/Auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
