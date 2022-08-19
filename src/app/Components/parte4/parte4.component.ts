import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-parte4',
  templateUrl: './parte4.component.html',
  styleUrls: ['./parte4.component.css']
})
export class Parte4Component implements OnInit {

  constructor(private service:ApiService) { 

  }

  personajes: any = {};

  ngOnInit(): void {
    this.service.getAllCharacters().subscribe(personajes => {
      this.personajes = personajes.results;
      console.log(this.personajes);
    });
    
  }

 



}
