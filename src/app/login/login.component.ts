import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Service/LoginService';
import {Utilisateur} from '../Model/Utilisateur';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:Utilisateur=new Utilisateur();
  constructor(public loginService:LoginService,public router:Router) { }

  ngOnInit(): void {
  }

  connexion(user: Utilisateur) {
    this.loginService.user=this.loginService.Utilisateurs.find(u=>{
      return u.username===user.username
    });
    if (this.loginService.user.role==="user"){
      this.router.navigateByUrl("etudiant")
    }else if (this.loginService.user.role==="admin"){
      this.router.navigateByUrl("admin")
    }

  }
}
