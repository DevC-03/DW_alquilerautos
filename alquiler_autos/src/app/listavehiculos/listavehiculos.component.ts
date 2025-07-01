import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Vehiculo } from '../../model/vehiculo.model';
import { Propietario } from '../../model/propietario';

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

  listapropietario: Propietario[];
  tipoSeleccionado: Propietario;
  tipoVehiculoDialogo: Vehiculo = new Vehiculo();
  nuevoTipo:boolean = true;

  obtenerVehiculos(){
    this.api.getVehiculo().subscribe(res => {
      this.listavehiculos = res;
    });
  }

  obtenerPropietario(){
      this.api.getPropietario().subscribe(res => {
        this.listapropietario = res;
      });
  }

  ngOnInit() {
    this.obtenerVehiculos();
    this.obtenerPropietario();
  }

  editarVehiculo(listavehiculos:Vehiculo){
    this.visible = true;
    this.nuevoTipo = false;
    this.tipoVehiculoDialogo = listavehiculos;
  }

  eliminarVehiculo(listavehiculos:Vehiculo){
    this.api.deleteVehiculo(listavehiculos.propietario.toString()).subscribe(() => {
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
