import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListausuariosComponent } from './listausuarios/listausuarios.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../service/auth.guard';
import { ListaclienteComponent } from './listacliente/listacliente.component';
import { HomeComponent } from './home/home.component';
import { ListavehiculosComponent } from './listavehiculos/listavehiculos.component';
import { ListafotosComponent } from './listafotos/listafotos.component';
import { ListapropietarioComponent } from './listapropietario/listapropietario.component';
import { ListaempleadosComponent } from './listaempleados/listaempleados.component';
import { ListachoferesComponent } from './listachoferes/listachoferes.component';
import { ListareservasComponent } from './listareservas/listareservas.component';
import { ListacontratoComponent } from './listacontrato/listacontrato.component';
import { ListapagoComponent } from './listapago/listapago.component';
import { ListarecibosComponent } from './listarecibos/listarecibos.component';


const routes: Routes = [
  {path: "listausuarios", component: ListausuariosComponent, canActivate:[AuthGuard]},
  {path: "listaclientes", component: ListaclienteComponent, canActivate:[AuthGuard]},
  {path: "listapropietarios", component: ListapropietarioComponent, canActivate:[AuthGuard]},
  {path: "listaempleados", component: ListaempleadosComponent, canActivate:[AuthGuard]},
  {path: "listachoferes", component: ListachoferesComponent, canActivate:[AuthGuard]},
  {path: "listavehiculos", component: ListavehiculosComponent, canActivate:[AuthGuard]},
  {path: "listafotos", component: ListafotosComponent, canActivate:[AuthGuard]},
  {path: "listareservas", component: ListareservasComponent, canActivate:[AuthGuard]},
  {path: "listacontratos", component: ListacontratoComponent, canActivate:[AuthGuard]},
  {path: "listapagos", component: ListapagoComponent, canActivate:[AuthGuard]},
  {path: "listarecibos", component: ListarecibosComponent, canActivate:[AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
