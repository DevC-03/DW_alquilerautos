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
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';

import { MenubarModule } from 'primeng/menubar';
import { LoginComponent } from './login/login.component';

import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FileUploadModule } from 'primeng/fileupload';

import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from '../service/token.interceptor';
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
import { ShowalquilarComponent } from './showalquilar/showalquilar.component';
import { DetallealquilerComponent } from './detallealquiler/detallealquiler.component';
import { PaneladminComponent } from './paneladmin/paneladmin.component';
import { RegistroComponent } from './registro/registro.component';
import { PublicarComponent } from './publicar/publicar.component';
import { ReservasclienteComponent } from './reservascliente/reservascliente.component';
import { TagModule } from 'primeng/tag';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    ListausuariosComponent,
    LoginComponent,
    ListaclienteComponent,
    HomeComponent,
    ListavehiculosComponent,
    ListafotosComponent,
    ListapropietarioComponent,
    ListaempleadosComponent,
    ListachoferesComponent,
    ListareservasComponent,
    ListacontratoComponent,
    ListapagoComponent,
    ListarecibosComponent,
    ShowalquilarComponent,
    DetallealquilerComponent,
    PaneladminComponent,
    RegistroComponent,
    PublicarComponent,
    ReservasclienteComponent,
    PerfilComponent,
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
    FileUploadModule,
    HttpClientModule,
    DropdownModule,
    CalendarModule,
    CheckboxModule,
    TagModule,
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
