import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListausuariosComponent } from './listausuarios/listausuarios.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../service/auth.guard';
import { ListaclienteComponent } from './listacliente/listacliente.component';
import { HomeComponent } from './home/home.component';
import { ListavehiculosComponent } from './listavehiculos/listavehiculos.component';
import { ListafotosComponent } from './listafotos/listafotos.component';


const routes: Routes = [
  {path: "listausuarios", component: ListausuariosComponent, canActivate:[AuthGuard]},
  {path: "listaclientes", component: ListaclienteComponent, canActivate:[AuthGuard]},
  {path: "listavehiculos", component: ListavehiculosComponent, canActivate:[AuthGuard]},
  {path: "listafotos", component: ListafotosComponent, canActivate:[AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
