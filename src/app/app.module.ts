import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Components/app/app-routing.module';
import { AppComponent } from './Components/app/app.component';
import { UserComponent } from './Components/user/user.component';
import { Parte4Component } from './components/parte4/parte4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


/* Componentes & pipes*/
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    Parte4Component,
    
  ],

  /* Modulos */

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  /* servicios*/
  providers: [],
  /* Componente principal*/
  bootstrap: [AppComponent]
})
export class AppModule { }
