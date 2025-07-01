import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Reserva } from '../../model/reserva';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-listareservas',
  standalone: false,
  templateUrl: './listareservas.component.html',
  styleUrl: './listareservas.component.css',
  providers: [ApiService]
})
export class ListareservasComponent {

  constructor(private api:ApiService){}

  listareservas: Reserva[] = [];
  tituloDialogo:string = "Nueva Reserva";
  visible:boolean = false;

  listaclientes: Cliente[] = [];
  tipoSeleccionado: Cliente | null;
  tipoReservaDialogo: Reserva = new Reserva();
  nuevoTipo:boolean = true;

  obtenerReservas(){
    this.api.getReserva().subscribe(res => {
      this.listareservas = res;
    });
  }

  obtenerClientes(){
      this.api.getCliente().subscribe(res => {
        this.listaclientes = res;
      });
  }

  ngOnInit() {
    this.obtenerReservas();
    this.obtenerClientes();
  }

  editarReservas(listareserva:Reserva){
    this.visible = true;
    this.nuevoTipo = false;
    this.tituloDialogo = "Editar Reserva";
    this.tipoReservaDialogo = {...listareserva};
  }

  eliminarReservas(listareserva:Reserva){
    this.api.deleteReserva(listareserva.cliente.toString()).subscribe(() => {
      this.obtenerReservas();
    });
  }

  abrirDialogo(){
    this.visible = true;
    this.nuevoTipo = true;
    this.tituloDialogo = "Nueva Reserva";
    this.tipoReservaDialogo = new Reserva();
    this.tipoSeleccionado = null;
  }

  guardarReservas(){
    if (this.tipoSeleccionado) {
      this.tipoReservaDialogo.cliente = this.tipoSeleccionado.usuario;
    }
    
    if (!this.tipoReservaDialogo.cliente || !this.tipoReservaDialogo.vehiculo) {
      alert('Por favor complete los campos obligatorios');
      return;
    }
    
    if (this.nuevoTipo){
      this.api.postReserva(this.tipoReservaDialogo).subscribe(res => {
        this.obtenerReservas();
        this.visible = false;
      });
    } else {
      this.api.putReserva(this.tipoReservaDialogo).subscribe(res => {
        this.obtenerReservas();
        this.visible = false;
      });
    }
  }

}
