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

  lista: Usuario[];

  ngOnInit() {
    this.api.getEmpleados().subscribe(res => {
      this.lista = res;
      console.log(this.lista);
    });
  }
}
