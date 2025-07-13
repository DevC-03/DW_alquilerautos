import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Reserva } from '../../model/reserva';

@Component({
  selector: 'app-reservascliente',
  standalone: false,
  templateUrl: './reservascliente.component.html',
  styleUrl: './reservascliente.component.css',
  providers: [ApiService]
})
export class ReservasclienteComponent {

  constructor(private api:ApiService){}

  listareservas: Reserva[] = [];

  
  obtenerReservas() {
    const userId = Number(localStorage.getItem('user_id')); // 👈 ID del usuario logeado

    this.api.getReserva().subscribe(reservas => {
      this.listareservas = reservas.filter(reserva => reserva.cliente === userId);
    });
  }

  ngOnInit() {
    this.obtenerReservas();
  }

  getSeverity(status: string): string {
    switch (status?.toUpperCase()) {
      case 'PENDIENTE':
        return 'warn';
      case 'CONFIRMADA':
        return 'success';
      case 'CANCELADA':
        return 'danger';
      case 'COMPLETADA':
        return 'info';
      default:
        return 'secondary';
    }
  }
}
