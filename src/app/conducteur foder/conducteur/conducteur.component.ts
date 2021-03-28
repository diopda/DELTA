import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Conducteur } from '../../conducteur';
import { serviceconducteurService } from '../../serviceconducteur.service';

@Component({
  selector: 'app-conducteur',
  templateUrl: './conducteur.component.html',
  styleUrls: ['./conducteur.component.css']
})
export class ConducteurComponent implements OnInit {

  conducteurs: Conducteur[] = [];

  constructor( private Serviceconducteur: serviceconducteurService,private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {
    this.getConducteurList();

  }

  private getConducteurList(){
    this.Serviceconducteur.getConducteurs().subscribe(data =>{
      this.conducteurs=data;
    });

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
