import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Propietario } from '../../model/propietario';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-listapropietario',
  standalone: false,
  templateUrl: './listapropietario.component.html',
  styleUrl: './listapropietario.component.css',
  providers: [ApiService]
})
export class ListapropietarioComponent {
  
    constructor(private api:ApiService){}
    listapropietario: Propietario[];
    visible:boolean = false;
    nuevoTipo:boolean = true;
    tipoPropietarioDialogo: Propietario = new Propietario();
  
    listausuarios: Usuario[];
    tituloDialogo:string = "Nuevo Tipo";
  
    tipoSeleccionado: Usuario;
  
    obtenerPropietario(){
      this.api.getPropietario().subscribe(res => {
        this.listapropietario = res;
      });
    }
  
    obtenerUsuarios(){
      this.api.getUsuario().subscribe(res => {
        this.listausuarios = res;
      });
    }
  
    ngOnInit() {
      this.obtenerPropietario();
      this.obtenerUsuarios();
    }
  
    editarPropietario(listapropietario:Propietario){
      this.visible = true;
      this.nuevoTipo = false;
      this.tipoPropietarioDialogo = listapropietario;
    }
  
    eliminarPropietario(listapropietario:Propietario){
      this.api.deletePropietario(listapropietario.usuario.toString()).subscribe(() => {
        this.obtenerPropietario();
      });
    }
  
    abrirDialogo(){
      this.visible = true;
      this.nuevoTipo = true;
      this.tipoPropietarioDialogo = new Propietario();
    }
  
    guardarPropietario(){
      this.tipoPropietarioDialogo.usuario = this.tipoSeleccionado.id;
      if (this.nuevoTipo){
        this.api.postPropietario(this.tipoPropietarioDialogo).subscribe(res => {
          this.obtenerPropietario();
        });
      } else {
        this.api.putPropietario(this.tipoPropietarioDialogo).subscribe(res => {
          this.obtenerPropietario();
        });
      }
      this.visible = false;
    }
}
