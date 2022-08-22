import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUsuario, UserType } from '../app/other/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  @Input('data') user :any

  @Output() borrar = new EventEmitter<number>()
  constructor() { }

  BorrarUsuario(id: number){
    console.log("entre a Borrarusuario")
    this.borrar.emit(id);
  }
  
   

}
