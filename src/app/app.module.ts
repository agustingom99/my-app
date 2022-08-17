import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Components/app/app-routing.module';
import { AppComponent } from './Components/app/app.component';
import { HeaderComponent } from './Components/header/header.component';

/* Componentes & pipes*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],

  /* Modulos */

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  /* servicios*/
  providers: [],
  /* Componente principal*/
  bootstrap: [AppComponent]
})
export class AppModule { }
