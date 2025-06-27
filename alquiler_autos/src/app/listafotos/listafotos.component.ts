import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FotoVehiculo } from '../../model/foto.model';

@Component({
  selector: 'app-listafotos',
  standalone: false,
  templateUrl: './listafotos.component.html',
  styleUrl: './listafotos.component.css',
  providers: [ApiService]
})
export class ListafotosComponent {

  constructor(private api:ApiService){}

  listafotos: FotoVehiculo[];
  tituloDialogo:string = "Nuevo Tipo";
  visible:boolean = false;

  tipoFotoVehiculoDialogo: FotoVehiculo = new FotoVehiculo();
  nuevoTipo:boolean = true;

  principalOptions = [
    { label: 'Sí', value: true },
    { label: 'No', value: false }
  ];

  obtenerFotos(){
    this.api.getFotos().subscribe(res => {
      this.listafotos = res;
    });
  }

  ngOnInit() {
    this.obtenerFotos();
  }

  editarFotos(listafotos:FotoVehiculo){
    this.visible = true;
    this.nuevoTipo = false;
    this.tipoFotoVehiculoDialogo = listafotos;
  }

  eliminarFotos(listafotos:FotoVehiculo){
    this.api.deleteFotos(listafotos.id.toString()).subscribe(() => {
      this.obtenerFotos();
    });
  }

  abrirDialogo(){
    this.visible = true;
    this.nuevoTipo = true;
    this.tipoFotoVehiculoDialogo = new FotoVehiculo();
  }

  guardarFotos(){
    if (this.nuevoTipo){
      this.api.postFotos(this.tipoFotoVehiculoDialogo).subscribe(res => {
        this.obtenerFotos();
      });
    } else {
      this.api.putFotos(this.tipoFotoVehiculoDialogo).subscribe(res => {
        this.obtenerFotos();
      });
    }
    this.visible = false;
  }
}
