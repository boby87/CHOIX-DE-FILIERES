import {Filliere} from './Filliere';

export class Utilisateur{
  username:string;
  password:string;
  role:string;
  note:string;
  filliere_choisir:Filliere[];
  filliere_admi:Filliere;
}
