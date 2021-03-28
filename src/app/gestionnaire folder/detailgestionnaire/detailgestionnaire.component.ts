import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Gestionnaire } from '../../gestionnaire';
import { GestionnaireService } from '../../gestionnaire.service';

@Component({
  selector: 'app-detailgestionnaire',
  templateUrl: './detailgestionnaire.component.html',
  styleUrls: ['./detailgestionnaire.component.css']
})
export class DetailgestionnaireComponent implements OnInit {

  id:any;

  gestionnaire:Gestionnaire | undefined;
  constructor( private route :ActivatedRoute,private gestionnaireservice: GestionnaireService,private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.gestionnaire= new Gestionnaire();
    this.gestionnaireservice.getGestionnaire(this.id).subscribe(data =>{

      this.gestionnaire=data;

    });
  }

  Annuler(){



    this.router.navigate(['/gestionnaire']);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
