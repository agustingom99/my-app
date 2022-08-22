import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUsuario, UserType } from '../app/other/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'my-app';
  usuarios: IUsuario[] = [];

  constructor( private _http: HttpClient){};

  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((datos : any) => this.usuarios= datos);
  }

  borrarUsuario(id: number){
    console.log(id);
    console.log(" ");
    this.usuarios.forEach(element => {
      console.log(element.id);
    });
    
    
    this.usuarios = this.usuarios.filter(usuario => usuario.id != id ) 
  }

}
