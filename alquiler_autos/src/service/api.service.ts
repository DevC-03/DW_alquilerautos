import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';
import { Cliente } from '../model/cliente';
import { Vehiculo } from '../model/vehiculo.model';
import { FotoVehiculo } from '../model/foto.model';

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

  // CLIENTES
    public getCliente(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.ApiUrl + 'clientes/');
    }

    //DELETE TipoProducto CRUD:Delete
    public deleteCliente(usuario:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'clientes/' + usuario + "/");
    }

    //PUT TipoProducto CRUD:Update
    public putCliente(cliente:Cliente): Observable<Cliente>{
        let body = JSON.stringify(cliente);
        return this.http.put<Cliente>(this.ApiUrl + 'clientes/' + cliente.usuario + "/",body,this.httpOptions);
    }

    //POST TipoProducto CRUD:Create
    public postCliente(cliente:Cliente): Observable<Cliente>{
        let body = JSON.stringify(cliente);
        return this.http.post<Cliente>(this.ApiUrl + 'clientes/',body,this.httpOptions);
    }

  // VEHICULOS
      public getVehiculo(): Observable<Vehiculo[]> {
        return this.http.get<Vehiculo[]>(this.ApiUrl + 'vehiculos/');
    }

    public deleteVehiculo(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'vehiculos/' + id + "/");
    }

    public putVehiculo(vehiculo:Vehiculo): Observable<Vehiculo>{
        let body = JSON.stringify(vehiculo);
        return this.http.put<Vehiculo>(this.ApiUrl + 'vehiculos/' + vehiculo.id + "/",body,this.httpOptions);
    }

    public postVehiculo(vehiculo:Vehiculo): Observable<Vehiculo>{
        let body = JSON.stringify(vehiculo);
        return this.http.post<Vehiculo>(this.ApiUrl + 'vehiculos/',body,this.httpOptions);
    }
    // FOTOS
    public getFotos(): Observable<FotoVehiculo[]> {
        return this.http.get<FotoVehiculo[]>(this.ApiUrl + 'fotos/');
    }

    public deleteFotos(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'fotos/' + id + "/");
    }

    public putFotos(fotos:FotoVehiculo): Observable<FotoVehiculo>{
        let body = JSON.stringify(FotoVehiculo);
        return this.http.put<FotoVehiculo>(this.ApiUrl + 'fotos/' + fotos.id + "/",body,this.httpOptions);
    }

    public postFotos(fotos:FotoVehiculo): Observable<FotoVehiculo>{
        let body = JSON.stringify(FotoVehiculo);
        return this.http.post<FotoVehiculo>(this.ApiUrl + 'fotos/',body,this.httpOptions);
    }

}