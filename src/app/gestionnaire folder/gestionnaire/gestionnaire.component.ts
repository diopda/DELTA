import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { AjoutergroupementComponent } from 'src/app/groupement folder/ajoutergroupement/ajoutergroupement.component';
import { Gestionnaire } from '../../gestionnaire';
import { GestionnaireService } from '../../gestionnaire.service';

@Component({
  selector: 'app-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.css']
})
export class GestionnaireComponent implements OnInit {


  gestionnaires: Gestionnaire[] | undefined;

  constructor( private gestionnaireservice: GestionnaireService, private router: Router,private authservice:AuthService) { }

  ngOnInit(): void {
    this.getGestionnaireList();

  }

  private getGestionnaireList(){
    this.gestionnaireservice.getGestionnaires().subscribe(data =>{
      this.gestionnaires=data;
    });
  }

  updateGestionnaire(id: any){

    this.router.navigate(['/updategestionnaire',id]);

  }

  ajouterGestionnaire(){

    this.router.navigate(['/savegestionnaire']);

  }

  deleteGestionnaire(id : number){

    this.gestionnaireservice.deleteGestionnaire(id).subscribe(data =>{
      console.log(data);
      this.getGestionnaireList();
    })

  }

  detailsGestionnaire(id : number){

    this.router.navigate(['/detailsgestionnaire',id]);

  }
  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }





}
