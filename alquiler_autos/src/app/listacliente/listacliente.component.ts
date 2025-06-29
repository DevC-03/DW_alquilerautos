import { Component } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ApiService } from '../../service/api.service';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-listacliente',
  standalone: false,
  templateUrl: './listacliente.component.html',
  styleUrl: './listacliente.component.css',
  providers: [ApiService]
})

export class ListaclienteComponent {

  constructor(private api:ApiService){}
  listacliente: Cliente[];
  visible:boolean = false;
  nuevoTipo:boolean = true;
  tipoClienteDialogo: Cliente = new Cliente();

  listausuarios: Usuario[];
  tituloDialogo:string = "Nuevo Tipo";

  tipoSeleccionado: Usuario;

  obtenerCliente(){
    this.api.getCliente().subscribe(res => {
      this.listacliente = res;
    });
  }

  obtenerUsuarios(){
    this.api.getUsuario().subscribe(res => {
      this.listausuarios = res;
    });
  }

  ngOnInit() {
    this.obtenerCliente();
    this.obtenerUsuarios();
  }

  editarCliente(listacliente:Cliente){
    this.visible = true;
    this.nuevoTipo = false;
    this.tipoClienteDialogo = listacliente;
  }

  eliminarCliente(listacliente:Cliente){
    this.api.deleteCliente(listacliente.usuario.toString()).subscribe(() => {
      this.obtenerCliente();
    });
  }

  abrirDialogo(){
    this.visible = true;
    this.nuevoTipo = true;
    this.tipoClienteDialogo = new Cliente();
  }

  guardarCliente(){
    this.tipoClienteDialogo.usuario = this.tipoSeleccionado.id;
    if (this.nuevoTipo){
      this.api.postCliente(this.tipoClienteDialogo).subscribe(res => {
        this.obtenerCliente();
      });
    } else {
      this.api.putCliente(this.tipoClienteDialogo).subscribe(res => {
        this.obtenerCliente();
      });
    }
    this.visible = false;
  }
}
