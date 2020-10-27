import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Service/LoginService';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  nav:number=1;
  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

  navig(number: number) {
    this.nav=number;
  }
}
