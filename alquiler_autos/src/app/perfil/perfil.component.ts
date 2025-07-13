import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  constructor(private auth: AuthService, private router: Router, private api: ApiService) {}

  tipoSeleccionado: 'cliente' | 'propietario' | null = null;
  userId = Number(localStorage.getItem('user_id'));
  yaRegistrado: boolean = false;

  // Formulario para Cliente
  cliente = {
    usuario: this.userId,
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    licencia_conducir: '',
    direccion: '',
    telefono: '',
    reputacion: 0
  };

  // Formulario para Propietario
  propietario = {
    usuario: this.userId,
    telefono: '',
    direccion: '',
    reputacion: 0,
    fecha_registro: new Date()
  };

  ngOnInit(): void {
    if (!this.userId) return;

    this.api.getCliente().subscribe(clientes => {
      const esCliente = clientes.some(c => c.usuario === this.userId);
      if (esCliente) {
        this.yaRegistrado = true;
      } else {
        this.api.getPropietario().subscribe(propietarios => {
          const esPropietario = propietarios.some(p => p.usuario === this.userId);
          this.yaRegistrado = esPropietario;
        });
      }
    });
  }

  enviarPerfil() {
    if (this.tipoSeleccionado === 'cliente') {
      this.auth.crearCliente(this.cliente).subscribe(() => {
        this.router.navigate(['/home']);
      });
    } else if (this.tipoSeleccionado === 'propietario') {
      this.auth.crearPropietario(this.propietario).subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }
}
