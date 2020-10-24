import {Injectable} from '@angular/core';
import {Utilisateur} from '../Model/Utilisateur';
import {Filliere} from '../Model/Filliere';
import {EcModule} from '../Model/EcModule';
import {Module_Ec} from '../Model/Module_Ec';

@Injectable()
export class LoginService {
  public user: Utilisateur;
  public filliere: Filliere;
  public fillieres: Filliere[] = [
    {nom_filiere: ' Genie Qualite-Hygiene-Sécurite-Environnement industriel',note_admition:0,nbr_person:3,module_filere:[]},
    {nom_filiere: 'Genie informatique et telecommunication',note_admition:0,nbr_person:2,module_filere:[]},
    {nom_filiere: 'Genie maritime et portuaire',note_admition:0,nbr_person:3,module_filere:[]},
    {nom_filiere: 'Genie des procedes',note_admition:15,nbr_person:5,module_filere:[]},
    {nom_filiere: 'Genie civil',note_admition:12,nbr_person:2,module_filere:[]},
    {nom_filiere: 'Genie energetique',note_admition:14,nbr_person:4,module_filere:[]},
    {nom_filiere: 'Genie automobile et mecatronique',note_admition:11,nbr_person:13,module_filere:[]},
    {nom_filiere: 'Genie mecanique',note_admition:12.5,nbr_person:6,module_filere:[]},
    {nom_filiere: 'Genie physique et technologie biomedicale',note_admition:13,nbr_person:3,module_filere:[]},
    {nom_filiere: 'Genie électrique et système intelligent.',note_admition:13,nbr_person:3,module_filere:[]},

  ];
  Utilisateurs: Utilisateur[] = [
    {
      username: 'fokou',
      note: '',
      password: 'fokou',
      role: 'user',
      filliere:[]
    },
    {
      username: 'prospere',
      note: '',
      password: 'prospere',
      role: 'admin',
      filliere:[]
    },
    {
      username: 'nana',
      note: '',
      password: 'nana',
      role: 'user',
      filliere:[]
    },
    {
      username: 'talom',
      note: '',
      password: 'talom',
      role: 'user',
      filliere:[]
    }
  ];

  public ec1:EcModule={
    note:14,
    libelle:"EC1"
  };
  public ec2:EcModule={
    note:12,
    libelle:"EC2"
  };
  public ec3:EcModule={
    note:15,
    libelle:"EC3"
  };
  public ec4:EcModule={
    note:16,
    libelle:"EC4"
  };
  public ec5:EcModule={
    note:13,
    libelle:"EC5"
  };
  public ec6:EcModule={
    note:10,
    libelle:"EC6"
  };
  public ec7:EcModule={
    note:9,
    libelle:"EC7"
  };

  public ecs:EcModule[]=[];


  module1:Module_Ec={
    libelle:"M1",
    note_module:0,
    ec:[]
  }

  module2:Module_Ec={
    libelle:"M2",
    note_module:0,
    ec:[]
  }

  module3:Module_Ec={
    libelle:"M3",
    note_module:0,
    ec:[]
  }

  public modules:Module_Ec[]=[];



  constructor() {
    this.modules.push(this.module1);
    this.modules.push(this.module2);
    this.modules.push(this.module3);

    this.ecs.push(this.ec1);
    this.ecs.push(this.ec2);
    this.ecs.push(this.ec3);
    this.ecs.push(this.ec4);
    this.ecs.push(this.ec5);
    this.ecs.push(this.ec6);
    this.ecs.push(this.ec7);
  }

}
