import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListausuariosComponent } from './listausuarios/listausuarios.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';


import { MenubarModule } from 'primeng/menubar';
import { LoginComponent } from './login/login.component';

import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';


import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from '../service/token.interceptor';
import { ListaclienteComponent } from './listacliente/listacliente.component';
import { HomeComponent } from './home/home.component';
import { ListavehiculosComponent } from './listavehiculos/listavehiculos.component';
import { ListafotosComponent } from './listafotos/listafotos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListausuariosComponent,
    LoginComponent,
    ListaclienteComponent,
    HomeComponent,
    ListavehiculosComponent,
    ListafotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    MenubarModule,
    CardModule,
    MessageModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    SelectModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    SelectButtonModule,
    HttpClientModule
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Lara,
                options: {
                  colorScheme: 'dark',
                  primatyColor: '#00bcd4'
                }
            }
        })
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
