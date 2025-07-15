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
  reservasPendientesPropietario: Reserva[] = [];
  esPropietario: boolean = false;
  
  obtenerReservas() {
  const userId = Number(localStorage.getItem('user_id'));

  this.api.getReserva().subscribe(reservas => {
    this.listareservas = reservas.filter(reserva => reserva.cliente === userId);
    this.reservasPendientesPropietario = this.listareservas.filter(reserva => reserva.estado === 'PENDIENTE');
  });
  }

  confirmarReserva(id: number) {
  this.api.actualizarReservaEstado(id, 'CONFIRMADA').subscribe(() => {
    this.ngOnInit(); // Para recargar la data
  });
  }

  ngOnInit() {
    const userId = Number(localStorage.getItem('user_id'));

    this.api.getReserva().subscribe(reservas => {
      this.listareservas = reservas.filter(reserva => reserva.cliente === userId);
    });

    this.api.getVehiculo().subscribe(vehiculos => {
      const vehiculosPropios = vehiculos.filter(v => v.propietario === userId);
      if (vehiculosPropios.length > 0) {
        this.esPropietario = true;
        const idsVehiculos = vehiculosPropios.map(v => v.id);

        this.api.getReserva().subscribe(reservas => {
          this.reservasPendientesPropietario = reservas.filter(r => 
            idsVehiculos.includes(r.vehiculo) && r.estado === 'PENDIENTE'
          );
        });
      }
    });
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
