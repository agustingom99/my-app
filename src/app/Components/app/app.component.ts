import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'my-app';
  usuario = [];

  constructor( private _http: HttpClient){};

  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((datos : any) => this.usuario = datos);

   

  }

}
