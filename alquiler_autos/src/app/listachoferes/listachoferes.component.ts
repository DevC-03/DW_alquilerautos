import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Chofer } from '../../model/chofer';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-listachoferes',
  standalone: false,
  templateUrl: './listachoferes.component.html',
  styleUrl: './listachoferes.component.css',
  providers: [ApiService]
})
export class ListachoferesComponent {

  constructor(private api:ApiService){}
  listachofer: Chofer[];
  visible:boolean = false;
  nuevoTipo:boolean = true;
  tipoChoferDialogo: Chofer = new Chofer();

  listausuarios: Usuario[];
  tituloDialogo:string = "Nuevo Tipo";

  tipoSeleccionado: Usuario;

  obtenerChofer(){
    this.api.getChofer().subscribe(res => {
      this.listachofer = res;
    });
  }

  obtenerUsuarios(){
    this.api.getUsuario().subscribe(res => {
      this.listausuarios = res;
    });
  }

  ngOnInit() {
    this.obtenerChofer();
    this.obtenerUsuarios();
  }

  editarChofer(listachofer:Chofer){
    this.visible = true;
    this.nuevoTipo = false;
    this.tipoChoferDialogo = listachofer;
  }

  eliminarChofer(listachofer:Chofer){
    this.api.deleteChofer(listachofer.usuario.toString()).subscribe(() => {
      this.obtenerChofer();
    });
  }

  abrirDialogo(){
    this.visible = true;
    this.nuevoTipo = true;
    this.tipoChoferDialogo = new Chofer();
  }

  guardarChofer(){
    this.tipoChoferDialogo.usuario = this.tipoSeleccionado.id;
    if (this.nuevoTipo){
      this.api.postChofer(this.tipoChoferDialogo).subscribe(res => {
        this.obtenerChofer();
      });
    } else {
      this.api.putChofer(this.tipoChoferDialogo).subscribe(res => {
        this.obtenerChofer();
      });
    }
    this.visible = false;
  }
}
