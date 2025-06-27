import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Vehiculo } from '../../model/vehiculo.model';

@Component({
  selector: 'app-listavehiculos',
  standalone: false,
  templateUrl: './listavehiculos.component.html',
  styleUrl: './listavehiculos.component.css',
  providers: [ApiService]
})
export class ListavehiculosComponent {

  constructor(private api:ApiService){}

  listavehiculos: Vehiculo[];
  tituloDialogo:string = "Nuevo Tipo";
  visible:boolean = false;

  tipoVehiculoDialogo: Vehiculo = new Vehiculo();
  nuevoTipo:boolean = true;

  obtenerVehiculos(){
    this.api.getVehiculo().subscribe(res => {
      this.listavehiculos = res;
    });
  }

  ngOnInit() {
    this.obtenerVehiculos();
  }

  editarVehiculo(listavehiculos:Vehiculo){
    this.visible = true;
    this.nuevoTipo = false;
    this.tipoVehiculoDialogo = listavehiculos;
  }

  eliminarVehiculo(listavehiculos:Vehiculo){
    this.api.deleteVehiculo(listavehiculos.id.toString()).subscribe(() => {
      this.obtenerVehiculos();
    });
  }

  abrirDialogo(){
    this.visible = true;
    this.nuevoTipo = true;
    this.tipoVehiculoDialogo = new Vehiculo();
  }

  guardarVehiculo(){
    if (this.nuevoTipo){
      this.api.postVehiculo(this.tipoVehiculoDialogo).subscribe(res => {
        this.obtenerVehiculos();
      });
    } else {
      this.api.putVehiculo(this.tipoVehiculoDialogo).subscribe(res => {
        this.obtenerVehiculos();
      });
    }
    this.visible = false;
  }
}
