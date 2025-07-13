import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Vehiculo } from '../../model/vehiculo.model';

@Component({
  selector: 'app-publicar',
  standalone: false,
  templateUrl: './publicar.component.html',
  styleUrl: './publicar.component.css',
  providers: [ApiService]
})
export class PublicarComponent {
  constructor(private api: ApiService) {}
  esPropietario: boolean = false;
  userId: number;

  listavehiculos: Vehiculo[] = [];
  publicarvehiculo: Vehiculo = new Vehiculo();
  archivoImagen: File | null = null;

  ngOnInit() {
  this.userId = Number(localStorage.getItem('user_id'));

  this.api.getPropietario().subscribe(propietarios => {
      const encontrado = propietarios.find(p => p.usuario === this.userId);
      if (encontrado) {
        this.esPropietario = true;
        this.obtenerVehiculos();
      }
    });
  }

  obtenerVehiculos() {
    this.api.getVehiculo().subscribe(res => {
      this.listavehiculos = res;
    });
  }

  onFileSelected(event: any) {
    this.archivoImagen = event.target.files[0];
  }

  guardarVehiculo() {
    this.publicarvehiculo.propietario = Number(localStorage.getItem('user_id'));
    this.api.postVehiculo(this.publicarvehiculo).subscribe(vehiculoCreado => {
      if (this.archivoImagen) {
        const formData = new FormData();
        formData.append('vehiculo', vehiculoCreado.id.toString()); // id del nuevo vehículo
        formData.append('imagen', this.archivoImagen);
        formData.append('es_principal', 'true'); // o false si quieres

        this.api.subirFoto(formData).subscribe(res => {
          alert("Vehículo e imagen publicados con éxito");
          this.obtenerVehiculos();
        }, err => {
          alert("Vehículo creado pero falló la imagen");
        });
      } else {
        alert("Vehículo creado sin imagen");
      }
    });
  }
}
