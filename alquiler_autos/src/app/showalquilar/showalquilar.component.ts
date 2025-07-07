import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Vehiculo } from '../../model/vehiculo.model';
import { FotoVehiculo } from '../../model/foto.model';

@Component({
  selector: 'app-showalquilar',
  standalone: false,
  templateUrl: './showalquilar.component.html',
  styleUrl: './showalquilar.component.css',
  providers: [ApiService]
})
export class ShowalquilarComponent {

  constructor(private api:ApiService){}

  listavehiculos: Vehiculo[] = [];
  listafotos: FotoVehiculo[] = [];

  obtenerVehiculos(){
    this.api.getVehiculo().subscribe(res => {
      this.listavehiculos = res;
    });
  }

  obtenerFotos(){
    this.api.getFotos().subscribe(res => {
      this.listafotos = res;
    });
  }

  ngOnInit() {
    this.obtenerVehiculos();
    this.obtenerFotos();
  }

  getImagenPrincipal(idVehiculo: number): string {
  const foto = this.listafotos.find(
    f => f.vehiculo === idVehiculo && f.es_principal === true
  );
  return foto ? foto.imagen : 'https://via.placeholder.com/500x300?text=Sin+imagen';
  }
}
