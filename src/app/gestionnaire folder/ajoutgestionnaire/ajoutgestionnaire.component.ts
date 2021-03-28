import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Gestionnaire } from '../../gestionnaire';
import { GestionnaireService } from '../../gestionnaire.service';

@Component({
  selector: 'app-ajoutgestionnaire',
  templateUrl: './ajoutgestionnaire.component.html',
  styleUrls: ['./ajoutgestionnaire.component.css']
})
export class AjoutgestionnaireComponent implements OnInit {

  gestionnaire: Gestionnaire= new Gestionnaire;


  constructor(private gestionnaireservice : GestionnaireService,private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {


  }

  saveGestionnaire(){
    this.gestionnaireservice.createGestionnaire(this.gestionnaire).subscribe(data =>{
      console.log(data);
    },
    error=>console.log(error));

    this.goToGestionnaireList();

  }

  goToGestionnaireList(){
    this.router.navigate(['/gestionnaire']);
  }

  onSubmit(){
    console.log(this.gestionnaire);
    this.saveGestionnaire();

  }


  Annuler(){

    this.router.navigate(['/gestionnaire']);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
