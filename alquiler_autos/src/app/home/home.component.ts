import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.cargarUsuario(); // 🔥 Aquí forzamos que actualice username$
  }

}
