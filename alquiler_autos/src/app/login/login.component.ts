import { Token } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = ''; // Add this line
  password: string = ''; // Add this line

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    localStorage.setItem('token', 'DESARROLLOWEB')
  }
}
