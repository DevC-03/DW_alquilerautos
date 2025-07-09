import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Vehiculo } from '../../model/vehiculo.model';
import { ActivatedRoute } from '@angular/router';
import { FotoVehiculo } from '../../model/foto.model';

@Component({
  selector: 'app-detallealquiler',
  standalone: false,
  templateUrl: './detallealquiler.component.html',
  styleUrl: './detallealquiler.component.css',
  providers: [ApiService]
})
export class DetallealquilerComponent {
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  vehiculo: Vehiculo | null = null;
  fotos: FotoVehiculo[] = [];
  fotoPrincipal: string = '';

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.api.getVehiculoPorId(id).subscribe(res => {
        this.vehiculo = res;
        this.obtenerFotos(); // solo llamamos fotos cuando ya tenemos el vehículo
      });
    }
  }

  obtenerFotos() {
    this.api.getFotos().subscribe(res => {
      // Filtrar fotos del vehículo actual
      const fotosVehiculo = res.filter(f => f.vehiculo === this.vehiculo?.id);
      const principal = fotosVehiculo.find(f => f.es_principal);

      this.fotoPrincipal = principal?.imagen || '';
    });
  }

}
