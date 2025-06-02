import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListausuariosComponent } from './listausuarios/listausuarios.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../service/auth.guard';


const routes: Routes = [
  {path: "listausuarios", component: ListausuariosComponent, canActivate:[AuthGuard]},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
