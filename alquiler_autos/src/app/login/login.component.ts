import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.servcice';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService]
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  username: string = ''; // Add this line
  password: string = ''; // Add this line

  login() {
    this.authService.login(this.username, this.password);
  }
}
