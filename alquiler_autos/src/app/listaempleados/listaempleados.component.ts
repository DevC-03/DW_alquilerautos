import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Empleado } from '../../model/empleado';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-listaempleados',
  standalone: false,
  templateUrl: './listaempleados.component.html',
  styleUrl: './listaempleados.component.css',
  providers: [ApiService]
})
export class ListaempleadosComponent {

  constructor(private api:ApiService){}
  listaempleado: Empleado[];
  visible:boolean = false;
  nuevoTipo:boolean = true;
  tipoEmpleadoDialogo: Empleado = new Empleado();

  listausuarios: Usuario[];
  tituloDialogo:string = "Nuevo Tipo";

  tipoSeleccionado: Usuario;

  obtenerEmpleado(){
    this.api.getEmpleado().subscribe(res => {
      this.listaempleado = res;
    });
  }

  obtenerUsuarios(){
    this.api.getUsuario().subscribe(res => {
      this.listausuarios = res;
    });
  }

  ngOnInit() {
    this.obtenerEmpleado();
    this.obtenerUsuarios();
  }

  editarEmpleado(listaempleado:Empleado){
    this.visible = true;
    this.nuevoTipo = false;
    this.tipoEmpleadoDialogo = listaempleado;
  }

  eliminarEmpleado(listaempleado:Empleado){
    this.api.deleteEmpleado(listaempleado.usuario.toString()).subscribe(() => {
      this.obtenerEmpleado();
    });
  }

  abrirDialogo(){
    this.visible = true;
    this.nuevoTipo = true;
    this.tipoEmpleadoDialogo = new Empleado();
  }

  guardarEmpleado(){
    this.tipoEmpleadoDialogo.usuario = this.tipoSeleccionado.id;
    if (this.nuevoTipo){
      this.api.postEmpleado(this.tipoEmpleadoDialogo).subscribe(res => {
        this.obtenerEmpleado();
      });
    } else {
      this.api.putEmpleado(this.tipoEmpleadoDialogo).subscribe(res => {
        this.obtenerEmpleado();
      });
    }
    this.visible = false;
  }
}
