import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-listausuarios',
  standalone: false,
  templateUrl: './listausuarios.component.html',
  styleUrl: './listausuarios.component.css',
  providers: [ApiService]
})

export class ListausuariosComponent {
  constructor(private api:ApiService){}

  listausuarios: Usuario[];
  tituloDialogo:string = "Nuevo Tipo";
  visible:boolean = false;

  tipoUsuarioDialogo: Usuario = new Usuario();
  nuevoTipo:boolean = true;

proveedorOptions = [
  { label: 'Sí', value: true },
  { label: 'No', value: false }
];

  obtenerUsuarios(){
    this.api.getEmpleados().subscribe(res => {
      this.listausuarios = res;
    });
  }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  editarTipo(listausuarios:Usuario){
    this.visible = true;
    this.nuevoTipo = false;
    this.tipoUsuarioDialogo = listausuarios;
  }

  eliminarTipo(listausuarios:Usuario){
    this.api.deleteUsuario(listausuarios.id.toString()).subscribe(() => {
      this.obtenerUsuarios();
    });
  }

  abrirDialogo(){
    this.visible = true;
    this.nuevoTipo = true;
    this.tipoUsuarioDialogo = new Usuario();
  }

  guardarTipo(){
    if (this.nuevoTipo){
      this.api.postUsuario(this.tipoUsuarioDialogo).subscribe(res => {
        this.obtenerUsuarios();
      });
    } else {
      this.api.putUsuario(this.tipoUsuarioDialogo).subscribe(res => {
        this.obtenerUsuarios();
      });
    }
    this.visible = false;
  }
  
}
