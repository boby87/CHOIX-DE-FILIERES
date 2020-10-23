import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Service/LoginService';
import {NotificationService} from '../Service/NotificationService';
import {Filliere} from '../Model/Filliere';

@Component({
  selector: 'app-filliere',
  templateUrl: './filliere.component.html',
  styleUrls: ['./filliere.component.css']
})
export class FilliereComponent implements OnInit {

  constructor(public loginService:LoginService,public notificationService:NotificationService) { }

  ngOnInit(): void {
  }

  add_fillier(event: any) {
    let fillier=this.loginService.fillieres.find(f=>{return f.nom_filiere===event.target.value})
    let index=this.loginService.user.filliere.indexOf(fillier);
    if (index==-1){
      if (this.loginService.user.filliere.length>2){
        this.loginService.user.filliere.pop();
        this.loginService.user.filliere.push(fillier);

      }else {
        this.loginService.user.filliere.push(fillier);
      }
    }else {
      this.notificationService.showWarning("Vous avez deja choisi cette filliere","")
    }
    console.log(this.loginService.user);

  }

  supprimer(fi: Filliere) {
   let index= this.loginService.user.filliere.indexOf(fi);
   this.loginService.user.filliere.splice(index,1);

  }
}
