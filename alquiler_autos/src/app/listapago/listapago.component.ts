import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Pago } from '../../model/pago';
import { Contrato } from '../../model/contrato';

@Component({
  selector: 'app-listapago',
  standalone: false,
  templateUrl: './listapago.component.html',
  styleUrl: './listapago.component.css',
  providers: [ApiService]
})
export class ListapagoComponent {

  constructor(private api:ApiService){}
  listapagos: Pago[];
  visible:boolean = false;
  nuevoTipo:boolean = true;
  tipoPagosDialogo: Pago = new Pago();

  listacontratos: Contrato[];
  tituloDialogo:string = "Nuevo Tipo";

  tipoSeleccionado: Contrato;

  obtenerPagos(){
    this.api.getPagos().subscribe(res => {
      this.listapagos = res;
    });
  }

  obtenerContratos(){
    this.api.getContrato().subscribe(res => {
      this.listacontratos = res;
    });
  }

  ngOnInit() {
    this.obtenerPagos();
    this.obtenerContratos();
  }

  editarPagos(listapago:Pago){
    this.visible = true;
    this.nuevoTipo = false;
    this.tipoPagosDialogo = listapago;
  }

  eliminarPagos(listapago:Pago){
    this.api.deleteEmpleado(listapago.contrato.toString()).subscribe(() => {
      this.obtenerPagos();
    });
  }

  abrirDialogo(){
    this.visible = true;
    this.nuevoTipo = true;
    this.tipoPagosDialogo = new Pago();
  }

  guardarPagos(){
    this.tipoPagosDialogo.contrato = this.tipoSeleccionado.reserva;
    if (this.nuevoTipo){
      this.api.postPagos(this.tipoPagosDialogo).subscribe(res => {
        this.obtenerPagos();
      });
    } else {
      this.api.putPagos(this.tipoPagosDialogo).subscribe(res => {
        this.obtenerPagos();
      });
    }
    this.visible = false;
  }
}
