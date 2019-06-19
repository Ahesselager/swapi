import { Component, OnInit } from '@angular/core';
import { LogInService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swapi';
  username: string;
  password: string;

  isLoggedIn = false;

  constructor(private loginService: LogInService) { }

  LogIn(): void {
    this.loginService.Login(this.username, this.password).then(result => this.isLoggedIn = result);
  }
}
