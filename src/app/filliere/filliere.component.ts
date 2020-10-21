import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Service/LoginService';

@Component({
  selector: 'app-filliere',
  templateUrl: './filliere.component.html',
  styleUrls: ['./filliere.component.css']
})
export class FilliereComponent implements OnInit {

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

}
