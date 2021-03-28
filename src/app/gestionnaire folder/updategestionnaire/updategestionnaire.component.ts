import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Gestionnaire } from 'src/app/gestionnaire';
import { GestionnaireService } from 'src/app/gestionnaire.service';

@Component({
  selector: 'app-updategestionnaire',
  templateUrl: './updategestionnaire.component.html',
  styleUrls: ['./updategestionnaire.component.css']
})
export class UpdategestionnaireComponent implements OnInit {

  id:any ;
  gestionnaire: Gestionnaire = new Gestionnaire();
  constructor(private gestionnaireservice:  GestionnaireService, private route: ActivatedRoute,private router: Router, private authservice:AuthService) { }

  ngOnInit(): void {


    this.gestionnaire = new Gestionnaire();

    this.id = this.route.snapshot.params['id'];

    this.gestionnaireservice.getGestionnaire(this.id)
    .subscribe(data=>{
      console.log(data)
      this.gestionnaire=data;
    },error =>console.log(error));


  }

  updateGestionnaire(){
    this.gestionnaireservice.updateGestionnaire(this.id,this.gestionnaire)
    .subscribe(data=>{
      console.log(data);
      this.gestionnaire=new Gestionnaire();
      this.goToGestionnaireList();
    },error => console.log(error)
    );

  }


  onSubmit(){
    this.updateGestionnaire();

}

  goToGestionnaireList(){
  this.router.navigate(['/gestionnaire']);
  }

  Annuler(){



    this.router.navigate(['/gestionnaire']);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
