import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';
import { Cliente } from '../model/cliente';
import { Vehiculo } from '../model/vehiculo.model';
import { FotoVehiculo } from '../model/foto.model';
import { Propietario } from '../model/propietario';
import { Empleado } from '../model/empleado';
import { Chofer } from '../model/chofer';
import { Reserva } from '../model/reserva';
import { Contrato } from '../model/contrato';
import { Pago } from '../model/pago';
import { Recibo } from '../model/recibo';

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

    public deleteCliente(usuario:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'clientes/' + usuario + "/");
    }

    public putCliente(cliente:Cliente): Observable<Cliente>{
        let body = JSON.stringify(cliente);
        return this.http.put<Cliente>(this.ApiUrl + 'clientes/' + cliente.usuario + "/",body,this.httpOptions);
    }

    public postCliente(cliente:Cliente): Observable<Cliente>{
        let body = JSON.stringify(cliente);
        return this.http.post<Cliente>(this.ApiUrl + 'clientes/',body,this.httpOptions);
    }

  // PROPIETARIOS
    public getPropietario(): Observable<Propietario[]> {
        return this.http.get<Propietario[]>(this.ApiUrl + 'propietarios/');
    }

    public deletePropietario(usuario:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'propietarios/' + usuario + "/");
    }

    public putPropietario(propietario:Propietario): Observable<Propietario>{
        let body = JSON.stringify(propietario);
        return this.http.put<Propietario>(this.ApiUrl + 'propietarios/' + propietario.usuario + "/",body,this.httpOptions);
    }

    public postPropietario(propietario:Propietario): Observable<Propietario>{
        let body = JSON.stringify(propietario);
        return this.http.post<Propietario>(this.ApiUrl + 'propietarios/',body,this.httpOptions);
    }

  // EMPLEADOS
    public getEmpleado(): Observable<Empleado[]> {
        return this.http.get<Empleado[]>(this.ApiUrl + 'empleados/');
    }

    public deleteEmpleado(usuario:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'empleados/' + usuario + "/");
    }

    public putEmpleado(empleado:Empleado): Observable<Empleado>{
        let body = JSON.stringify(empleado);
        return this.http.put<Empleado>(this.ApiUrl + 'empleados/' + empleado.usuario + "/",body,this.httpOptions);
    }

    public postEmpleado(empleado:Empleado): Observable<Empleado>{
        let body = JSON.stringify(empleado);
        return this.http.post<Empleado>(this.ApiUrl + 'empleados/',body,this.httpOptions);
    }

  // CHOFERES
    public getChofer(): Observable<Chofer[]> {
        return this.http.get<Chofer[]>(this.ApiUrl + 'choferes/');
    }

    public deleteChofer(usuario:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'choferes/' + usuario + "/");
    }

    public putChofer(chofer:Chofer): Observable<Chofer>{
        let body = JSON.stringify(chofer);
        return this.http.put<Chofer>(this.ApiUrl + 'choferes/' + chofer.usuario + "/",body,this.httpOptions);
    }

    public postChofer(chofer:Chofer): Observable<Chofer>{
        let body = JSON.stringify(chofer);
        return this.http.post<Chofer>(this.ApiUrl + 'choferes/',body,this.httpOptions);
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
        return this.http.put<Vehiculo>(this.ApiUrl + 'vehiculos/' + vehiculo.propietario + "/",body,this.httpOptions);
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

    public putFotos(fotos:FormData, id:string): Observable<FotoVehiculo>{
        return this.http.put<FotoVehiculo>(this.ApiUrl + 'fotos/' + id + "/",fotos);
    }

    public postFotos(fotos:FormData): Observable<FotoVehiculo>{
        return this.http.post<FotoVehiculo>(this.ApiUrl + 'fotos/',fotos);
    }
  // RESERVAS
      public getReserva(): Observable<Reserva[]> {
        return this.http.get<Reserva[]>(this.ApiUrl + 'reservas/');
    }

    public deleteReserva(id:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'reservas/' + id + "/");
    }

    public putReserva(reserva:Reserva): Observable<Reserva>{
        let body = JSON.stringify(reserva);
        return this.http.put<Reserva>(this.ApiUrl + 'reservas/' + reserva.cliente + "/",body,this.httpOptions);
    }

    public postReserva(reserva:Reserva): Observable<Reserva>{
        let body = JSON.stringify(reserva);
        return this.http.post<Reserva>(this.ApiUrl + 'reservas/',body,this.httpOptions);
    }
  // CONTRATO
      public getContrato(): Observable<Contrato[]> {
        return this.http.get<Contrato[]>(this.ApiUrl + 'contratos/');
    }

    public deleteContrato(reserva:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'contratos/' + reserva + "/");
    }

    public putContrato(contrato:Contrato): Observable<Contrato>{
        let body = JSON.stringify(contrato);
        return this.http.put<Contrato>(this.ApiUrl + 'contratos/' + contrato.reserva + "/",body,this.httpOptions);
    }

    public postContrato(contrato:Contrato): Observable<Contrato>{
        let body = JSON.stringify(contrato);
        return this.http.post<Contrato>(this.ApiUrl + 'contratos/',body,this.httpOptions);
    }

  // PAGOS
      public getPagos(): Observable<Pago[]> {
        return this.http.get<Pago[]>(this.ApiUrl + 'pagos/');
    }

    public deletePagos(contrato:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'pagos/' + contrato + "/");
    }

    public putPagos(pagos:Pago): Observable<Pago>{
        let body = JSON.stringify(pagos);
        return this.http.put<Pago>(this.ApiUrl + 'pagos/' + pagos.contrato + "/",body,this.httpOptions);
    }

    public postPagos(pagos:Pago): Observable<Pago>{
        let body = JSON.stringify(pagos);
        return this.http.post<Pago>(this.ApiUrl + 'pagos/',body,this.httpOptions);
    }

  // RECIBOS
    public getRecibos(): Observable<Recibo[]> {
        return this.http.get<Recibo[]>(this.ApiUrl + 'recibos/');
    }

    public deleteRecibos(contrato:string): Observable<void>{
        return this.http.delete<void>(this.ApiUrl + 'recibos/' + contrato + "/");
    }

    public putRecibos(recibo:Recibo): Observable<Recibo>{
        let body = JSON.stringify(recibo);
        return this.http.put<Recibo>(this.ApiUrl + 'recibos/' + recibo.contrato + "/",body,this.httpOptions);
    }

    public postRecibos(recibo:Recibo): Observable<Recibo>{
        let body = JSON.stringify(recibo);
        return this.http.post<Recibo>(this.ApiUrl + 'recibos/',body,this.httpOptions);
    }
}