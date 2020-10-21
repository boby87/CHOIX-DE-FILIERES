import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {EtudiantComponent} from './etudiant/etudiant.component';
import {AdministrateurComponent} from './administrateur/administrateur.component';
import {FilliereComponent} from './filliere/filliere.component';

const routes: Routes = [
  { path: '' ,component: LoginComponent},
  { path: 'login' ,component: LoginComponent},
  { path: 'etudiant' ,component: EtudiantComponent},
  { path: 'admin' ,component: AdministrateurComponent},
  { path: 'filiere' ,component: FilliereComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
