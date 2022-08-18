import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Components/app/app-routing.module';
import { AppComponent } from './Components/app/app.component';
import { UserComponent } from './Components/user/user.component';

/* Componentes & pipes*/
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    
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
