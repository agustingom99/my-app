import { Component } from '@angular/core';
import { Usuario, UserType } from '../app/other/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  constructor() { }

  isLogged: boolean = false;
  nivel: number =5;

  user: Usuario = <Usuario>{
    ID:23,
    Nombre: "alex",
    Apellido: "Pepe",
    Email: "alex@gmail.com",
    Nick: "alex",
    Contraseña: "alex",
    tipo: UserType.Administrador
  
  }

  mostrar(): void{
    console.log(this.user.Apellido);
  }
   

}
