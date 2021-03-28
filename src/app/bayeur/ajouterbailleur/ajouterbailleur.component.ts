import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Bailleur } from '../../bailleur';
import { BailleurService } from '../../bailleur-service.service';

@Component({
  selector: 'app-ajouterbailleur',
  templateUrl: './ajouterbailleur.component.html',
  styleUrls: ['./ajouterbailleur.component.css']
})
export class AjouterbailleurComponent implements OnInit {
  bayeur: Bailleur= new Bailleur;


  constructor(private bailleureservice : BailleurService,private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {


  }

  saveBayeur(){
    this.bailleureservice.createBayeur(this.bayeur).subscribe(data =>{
      console.log(data);
    },
    error=>console.log(error));

    this.goToBayeurList();

  }

  goToBayeurList(){
    this.router.navigate(['/bailleur']);
  }

  onSubmit(){
    console.log(this.bayeur);
    this.saveBayeur();

  }
  Annuler(){



    this.router.navigate(['/bailleur']);

  }
  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }

}
