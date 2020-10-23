import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Service/LoginService';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit {

  navbar_filliere:number=1;


  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

  navig(n:number){
    this.navbar_filliere=n;
  }

}
