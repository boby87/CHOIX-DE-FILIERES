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
  public fillier_admi:Filliere;
  public module_ec:Module_Ec;
  public module_ecs:Module_Ec[]=[];
  public element_constitu:EcModule;
  public element_constitus:EcModule[]=[];
  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

  navig(n:number){
    this.navbar_filliere=n;
  }

  choix_ec_admin(n:number){
    this.choi_ec=n;
  }

  select_module(e: any) {
    let moduleEc=this.loginService.modules.find(m=>{
      return m.libelle==e.target.value;
    });
    console.log(this.fillier);
    this.module_ecs.push(moduleEc)
    this.fillier.module_filere=this.module_ecs;
    console.log( this.fillier);
  }

  select_filiee(filier: any) {
    this.fillier=this.loginService.fillieres.find(m=>{
      return m.nom_filiere==filier.target.value;
    });
  }

  select_element(ec: any) {
    this.element_constitu=this.loginService.ecs.find(m=>{
      return m.libelle==ec.target.value;
    });
    this.element_constitus.push(this.element_constitu);
    this.module_ec.ec=this.element_constitus;
  }

  add_ec(m: Module_Ec) {
    this.module_ec=m;
  }

  add_note(m: Filliere) {
    this.fillier=m;
  }

  saveNote() {
    let index=this.loginService.fillieres.findIndex(i=>i.nom_filiere==this.fillier.nom_filiere);
    this.loginService.fillieres.splice(index,1);
    this.loginService.fillieres.push(this.fillier);

  }

  select_etudian(u: any) {
    let user=this.loginService.Utilisateurs.find(us=>us.username==u.target.value);
    user.filliere_admi=this.fillier_admi;
    console.log(this.fillier_admi)
    this.loginService.liste_user_admin.push(user);
  }

  select_filiere_etudian(filier: any) {
    this.fillier_admi=this.loginService.fillieres.find(m=>{
      return m.nom_filiere==filier.target.value;
    });
  }
}
