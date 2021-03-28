import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Organe } from 'src/app/organe';
import { OrganeService } from 'src/app/organe.service';

@Component({
  selector: 'app-ajouterorgane',
  templateUrl: './ajouterorgane.component.html',
  styleUrls: ['./ajouterorgane.component.css']
})
export class AjouterorganeComponent implements OnInit {


  loginForm!: FormGroup ;
  isSubmitted  =  false;
  organe: Organe= new Organe;


  constructor(private organeservice:OrganeService,private router:Router,private formBuilder: FormBuilder,private authservice:AuthService) { }

  ngOnInit(): void {



  }

  saveOrgane(){
    this.organeservice.createOrgane(this.organe).subscribe(data =>{
      console.log(data);
    },

    error=>console.log(error));


    this.goToOrganeList();

  }

  goToOrganeList(){
    this.router.navigate(['/organe']);
  }

  onSubmit(){
    console.log(this.organe);
    this.saveOrgane();

  }

  Annuler(){



    this.router.navigate(['/cuvette']);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }



}
