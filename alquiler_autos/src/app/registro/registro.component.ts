import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
  providers: [ApiService]
})

export class RegistroComponent {
  constructor(private api:ApiService){}

  

}
