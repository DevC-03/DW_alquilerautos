import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ApiService],
})
export class HomeComponent {
  constructor(private apiService: ApiService) {}
}
