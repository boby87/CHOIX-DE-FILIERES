import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Service/LoginService';
import {Filliere} from '../Model/Filliere';
import {Module_Ec} from '../Model/Module_Ec';
import {EcModule} from '../Model/EcModule';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit {

  navbar_filliere:number=1;
  choi_ec:number=0;

  public fillier:Filliere;
  public module_ec:Module_Ec;
  public element_constitu:EcModule;
  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

  navig(n:number){
    this.navbar_filliere=n;
  }

  choix_ec_admin(n:number){
    this.choi_ec=n;
  }

  select_filier($event: MouseEvent) {

  }
}
