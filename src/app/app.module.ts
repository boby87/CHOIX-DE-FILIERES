import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FilliereComponent } from './filliere/filliere.component';
import {LoginService} from './Service/LoginService';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { HearderComponent } from './hearder/hearder.component';
import {NotificationService} from './Service/NotificationService';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModuleadminComponent } from './moduleadmin/moduleadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilliereComponent,
    EtudiantComponent,
    AdministrateurComponent,
    HearderComponent,
    ModuleadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({}),
  ],
  providers: [
    NotificationService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
