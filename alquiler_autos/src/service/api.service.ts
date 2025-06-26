import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';
import { Vehiculo } from '../model/vehiculo.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private ApiUrl = 'http://localhost:8000/api/'; // URL base de tu API

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // Obtener la lista de usuarios
  getEmpleados(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(this.ApiUrl + 'usuarios/');
  }
  
  //GET Jugadores
  public getUsuario(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.ApiUrl + 'usuarios/');
  }
  
  //DELETE Jugador
  public deleteUsuario(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'usuarios/' + id + "/");
  }

  //PUT Jugador
  public putUsuario(usuario:Usuario): Observable<Usuario>{
        let body = JSON.stringify(usuario);
        return this.http.put<Usuario>(this.ApiUrl + 'usuarios/' + usuario.id + "/",body,this.httpOptions);
  }

  //POST Jugador
  public postUsuario(usuario:Usuario): Observable<Usuario>{
      let body = JSON.stringify(usuario);
      return this.http.post<Usuario>(this.ApiUrl + 'usuarios/',body,this.httpOptions);
  }

// TIPO USUARIO
}