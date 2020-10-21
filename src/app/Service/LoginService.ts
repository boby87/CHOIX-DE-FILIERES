import {Injectable} from '@angular/core';
import {Utilisateur} from '../Model/Utilisateur';
import {Filliere} from '../Model/Filliere';

@Injectable()
export class LoginService {
  public user: Utilisateur;
  public filliere: Filliere;
  public fillieres: Filliere[] = [
    {nom_filiere: ' Genie Qualite-Hygiene-Sécurite-Environnement industriel',note_admition:""},
    {nom_filiere: 'Genie informatique et telecommunication',note_admition:""},
    {nom_filiere: 'Genie maritime et portuaire',note_admition:""},
    {nom_filiere: 'Genie des procedes',note_admition:""},
    {nom_filiere: 'Genie civil',note_admition:""},
    {nom_filiere: 'Genie energetique',note_admition:""},
    {nom_filiere: 'Genie automobile et mecatronique',note_admition:""},
    {nom_filiere: 'Genie mecanique',note_admition:""},
    {nom_filiere: 'Genie physique et technologie biomedicale',note_admition:""},
    {nom_filiere: 'Genie électrique et système intelligent.',note_admition:""},

  ];
  Utilisateurs: Utilisateur[] = [
    {
      username: 'fokou',
      note: '',
      password: 'fokou',
      role: 'user'
    },
    {
      username: 'prospere',
      note: '',
      password: 'prospere',
      role: 'admin'
    },
    {
      username: 'nana',
      note: '',
      password: 'nana',
      role: 'user'
    },
    {
      username: 'talom',
      note: '',
      password: 'talom',
      role: 'user'
    }
  ];

  constructor() {
  }

}
