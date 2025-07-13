import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loginUrl = 'http://127.0.0.1:8000/api/login/';
  private usuarioUrl = 'http://127.0.0.1:8000/api/usuario-actual/';
  public usuario: any = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(this.loginUrl, { username, password });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.usuario = null;
  }

  obtenerUsuario() {
    return this.http.get(this.usuarioUrl);
  }

  cargarUsuario() {
    this.obtenerUsuario().subscribe({
      next: (res) => {
        this.usuario = res;
      },
      error: (err) => {
        console.error('Error al obtener el usuario actual:', err);
      }
    });
  }
}
