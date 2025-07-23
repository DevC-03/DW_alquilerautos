import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Vehiculo } from '../../model/vehiculo.model';
import { ActivatedRoute } from '@angular/router';
import { FotoVehiculo } from '../../model/foto.model';

@Component({
  selector: 'app-detallealquiler',
  standalone: false,
  templateUrl: './detallealquiler.component.html',
  styleUrl: './detallealquiler.component.css',
  providers: [ApiService],
})
export class DetallealquilerComponent {
  vehiculo: Vehiculo | null = null;
  fotos: FotoVehiculo[] = [];
  fotoPrincipal: string = '';

  fechaInicio: string = '';
  fechaFin: string = '';
  requiereChofer: boolean = false;

  clienteId: number;

  errorMensaje = '';
  tipoMensaje: string = 'info';

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.api.getVehiculoPorId(id).subscribe(res => {
        this.vehiculo = res;
        this.obtenerFotos();
      });
    }
    this.clienteId = Number(localStorage.getItem('user_id'));
  }

  obtenerFotos() {
    this.api.getFotos().subscribe(res => {
      const fotosVehiculo = res.filter(f => f.vehiculo === this.vehiculo?.id);
      const principal = fotosVehiculo.find(f => f.es_principal);
      this.fotoPrincipal = principal?.imagen || '';
    });
  }

  calcularPrecioTotal(): number {
    if (!this.fechaInicio || !this.fechaFin || !this.vehiculo) return 0;
    const inicio = new Date(this.fechaInicio);
    const fin = new Date(this.fechaFin);
    const dias = Math.ceil((fin.getTime() - inicio.getTime()) / (1000 * 3600 * 24));
    return dias > 0 ? dias * Number(this.vehiculo.precio_diario) : 0;
  }

  reservar() {
    if (!this.fechaInicio || !this.fechaFin || !this.vehiculo) {
      this.errorMensaje = 'Completa todos los campos.';
      this.tipoMensaje = 'warn';
      return;
    }

    const precio_total = this.calcularPrecioTotal();

    const datosReserva = {
      cliente: this.clienteId,
      vehiculo: this.vehiculo.id,
      fecha_inicio: this.fechaInicio,
      fecha_fin: this.fechaFin,
      requiere_chofer: this.requiereChofer,
      seguro: true,
      precio_total: precio_total
    };

    this.api.crearReserva(datosReserva).subscribe({
      next: res => {
        this.errorMensaje = 'Reserva realizada con éxito';
        this.tipoMensaje = 'success';
        // alert("Reserva realizada con éxito");
      },
      error: err => {
        console.log('Datos enviados:', datosReserva);
        console.error(err);
        this.errorMensaje = 'Error al hacer la reserva';
        this.tipoMensaje = 'error';
        // alert("Error al hacer la reserva");
      }
    });
  }
}
