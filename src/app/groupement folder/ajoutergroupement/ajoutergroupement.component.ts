import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Groupement } from 'src/app/groupement';
import { GroupementService } from 'src/app/groupement.service';
import { Section } from 'src/app/section';

@Component({
  selector: 'app-ajoutergroupement',
  templateUrl: './ajoutergroupement.component.html',
  styleUrls: ['./ajoutergroupement.component.css']
})
export class AjoutergroupementComponent implements OnInit {

  groupement: Groupement= new Groupement;
  section?:Section;

  constructor(private groupementservice : GroupementService,private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {


  }

  saveGroupement(){
    this.groupementservice.createGroupement(this.groupement).subscribe(data =>{
      console.log(data);
    },
    error=>console.log(error));

    this.goToGroupementList();

  }

  goToGroupementList(){
    this.router.navigate(['/groupement']);
  }

  onSubmit(){
    console.log(this.groupement);
    this.saveGroupement();

  }


  Annuler(){

    this.router.navigate(['/groupement']);

  }
  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }

}
