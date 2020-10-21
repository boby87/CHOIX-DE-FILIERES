import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './Service/LoginService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admintionfiliere';
  constructor(router:Router,loginService:LoginService) {
    if (!loginService.user) router.navigateByUrl("login")
  }
}
