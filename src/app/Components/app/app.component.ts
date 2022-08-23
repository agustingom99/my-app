import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { IUsuario, UserType } from '../app/other/interfaces';
import {}  from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  singupForm: FormGroup 

  constructor(private _builder: FormBuilder){
   this.singupForm = this._builder.group({
    nombre:[''],
    usuario:['',Validators.required] ,
    email: ['', Validators.compose([Validators.email, Validators.required])] ,
    clave: ['',Validators.required]
   })
    
   };

   enviar(values: any){
    console.log(values);
   }
  }


