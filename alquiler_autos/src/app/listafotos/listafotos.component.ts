import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FotoVehiculo } from '../../model/foto.model';
import { Vehiculo } from '../../model/vehiculo.model';

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

  listavehiculos: Vehiculo[];
  tipoSeleccionado: Vehiculo;

  imagenSeleccionada: File | null = null;

  principalOptions = [
    { label: 'Sí', value: true },
    { label: 'No', value: false }
  ];

  obtenerFotos(){
    this.api.getFotos().subscribe(res => {
      this.listafotos = res;
    });
  }

  obtenerVehiculos(){
    this.api.getVehiculo().subscribe(res => {
      this.listavehiculos = res;
    });
  }

  ngOnInit() {
    this.obtenerFotos();
    this.obtenerVehiculos();
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
    const formDataVehiculo = new FormData();
    
    // Asignar el vehículo seleccionado al objeto
    if (this.tipoSeleccionado) {
      this.tipoFotoVehiculoDialogo.vehiculo = this.tipoSeleccionado.propietario;
    }
    
    if (this.nuevoTipo){
      formDataVehiculo.append('vehiculo',this.tipoFotoVehiculoDialogo.vehiculo.toString())
      formDataVehiculo.append('es_principal',this.tipoFotoVehiculoDialogo.es_principal.toString())
      if (this.imagenSeleccionada){
        formDataVehiculo.append('imagen',this.imagenSeleccionada)
      }
      this.api.postFotos(formDataVehiculo).subscribe({
        next: (res) => {
          this.obtenerFotos();
          this.visible = false;
        },
        error: (error) => {
          console.error('Error al crear foto:', error);
        }
      });
    } else {
      formDataVehiculo.append('vehiculo',this.tipoFotoVehiculoDialogo.vehiculo.toString())
      formDataVehiculo.append('es_principal',this.tipoFotoVehiculoDialogo.es_principal.toString())
      if (this.imagenSeleccionada){
        formDataVehiculo.append('imagen',this.imagenSeleccionada)
      }
      this.api.putFotos(formDataVehiculo, this.tipoFotoVehiculoDialogo.id.toString()).subscribe({
        next: (res) => {
          this.obtenerFotos();
          this.visible = false;
        },
        error: (error) => {
          console.error('Error al actualizar foto:', error);
        }
      });
    }
  }

  onBasicUploadAuto(event:any){
    this.imagenSeleccionada = event.files[0];
  }
}