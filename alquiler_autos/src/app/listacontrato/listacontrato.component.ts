import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Contrato } from '../../model/contrato';
import { Reserva } from '../../model/reserva';

@Component({
  selector: 'app-listacontrato',
  standalone: false,
  templateUrl: './listacontrato.component.html',
  styleUrl: './listacontrato.component.css',
  providers: [ApiService]
})
export class ListacontratoComponent {

  constructor(private api:ApiService){}
  listacontratos: Contrato[];
  visible:boolean = false;
  nuevoTipo:boolean = true;
  tipoContratoDialogo: Contrato = new Contrato();

  listareserva: Reserva[];
  tituloDialogo:string = "Nuevo Tipo";

  tipoSeleccionado: Reserva;

  obtenerContrato(){
    this.api.getContrato().subscribe(res => {
      this.listacontratos = res;
    });
  }

  obtenerReserva(){
    this.api.getReserva().subscribe(res => {
      this.listareserva = res;
    });
  }

  ngOnInit() {
    this.obtenerContrato();
    this.obtenerReserva();
  }

  editarContrato(listacontrato:Contrato){
    this.visible = true;
    this.nuevoTipo = false;
    this.tipoContratoDialogo = listacontrato;
  }

  eliminarContrato(listacontrato:Contrato){
    this.api.deleteContrato(listacontrato.reserva.toString()).subscribe(() => {
      this.obtenerContrato();
    });
  }

  abrirDialogo(){
    this.visible = true;
    this.nuevoTipo = true;
    this.tipoContratoDialogo = new Contrato();
  }

  guardarContrato(){
    this.tipoContratoDialogo.reserva = this.tipoSeleccionado.cliente;
    if (this.nuevoTipo){
      this.api.postContrato(this.tipoContratoDialogo).subscribe(res => {
        this.obtenerContrato();
      });
    } else {
      this.api.putContrato(this.tipoContratoDialogo).subscribe(res => {
        this.obtenerContrato();
      });
    }
    this.visible = false;
  }
}
