import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})

export class RegistroComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.user).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user_id', res.user_id);
        this.router.navigate(['/home']); // o donde desees redirigir
      },
      error: () => {
        this.error = 'No se pudo registrar';
      }
    });
  }

}
