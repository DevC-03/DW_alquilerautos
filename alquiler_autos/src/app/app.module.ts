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

import { MenubarModule } from 'primeng/menubar';
import { LoginComponent } from './login/login.component';

import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';

import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from '../service/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListausuariosComponent,
    LoginComponent,
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
