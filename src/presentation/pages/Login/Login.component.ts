import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Auth/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submitLogin(event: Event) {
    event.preventDefault();

    // uma classe normal do javascript que vc consegue pegar os valores dentro de um formulário.
    // ele recebe como elemento um form element
    // o get serve para pegar os campos
    const form = new FormData(event.target as HTMLFormElement);

    const username = form.get('username') as string;
    const password = form.get('password') as string;

    this.authService.login(username, password);
  }

}
