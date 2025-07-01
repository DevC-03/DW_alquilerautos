import { Component } from '@angular/core';
import { Recibo } from '../../model/recibo';
import { Contrato } from '../../model/contrato';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-listarecibos',
  standalone: false,
  templateUrl: './listarecibos.component.html',
  styleUrl: './listarecibos.component.css',
  providers: [ApiService]
})
export class ListarecibosComponent {

  constructor(private api:ApiService){}

  listarecibos: Recibo[];
  visible:boolean = false;
  nuevoTipo:boolean = true;
  tipoRecibosDialogo: Recibo = new Recibo();

  listacontratos: Contrato[];
  tituloDialogo:string = "Nuevo Tipo";

  tipoSeleccionado: Contrato;

  obtenerRecibos(){
    this.api.getRecibos().subscribe(res => {
      this.listarecibos = res;
    });
  }

  obtenerContratos(){
    this.api.getContrato().subscribe(res => {
      this.listacontratos = res;
    });
  }

  ngOnInit() {
    this.obtenerRecibos();
    this.obtenerContratos();
  }

  editarRecibos(listarecibo:Recibo){
    this.visible = true;
    this.nuevoTipo = false;
    this.tipoRecibosDialogo = listarecibo;
  }

  eliminarRecibos(listarecibo:Recibo){
    this.api.deleteEmpleado(listarecibo.contrato.toString()).subscribe(() => {
      this.obtenerRecibos();
    });
  }

  abrirDialogo(){
    this.visible = true;
    this.nuevoTipo = true;
    this.tipoRecibosDialogo = new Recibo();
  }

  guardarRecibos(){
    this.tipoRecibosDialogo.contrato = this.tipoSeleccionado.reserva;
    if (this.nuevoTipo){
      this.api.postRecibos(this.tipoRecibosDialogo).subscribe(res => {
        this.obtenerRecibos();
      });
    } else {
      this.api.putRecibos(this.tipoRecibosDialogo).subscribe(res => {
        this.obtenerRecibos();
      });
    }
    this.visible = false;
  }
}
