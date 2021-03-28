import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Ouvrage } from 'src/app/ouvrage';
import { OuvrageService } from 'src/app/ouvrage.service';

@Component({
  selector: 'app-ajouterouvrage',
  templateUrl: './ajouterouvrage.component.html',
  styleUrls: ['./ajouterouvrage.component.css']
})
export class AjouterouvrageComponent implements OnInit {

  loginForm!: FormGroup ;
  isSubmitted  =  false;
  ouvrage: Ouvrage= new Ouvrage;


  constructor(private ouvrageservice:OuvrageService,private router:Router,private formBuilder: FormBuilder,private authservice:AuthService) { }

  ngOnInit(): void {



  }

  saveOuvrage(){
    this.ouvrageservice.createOuvrage(this.ouvrage).subscribe(data =>{
      console.log(data);
    },

    error=>console.log(error));


    this.goToOuvrageList();

  }

  goToOuvrageList(){
    this.router.navigate(['/ouvrage']);
  }

  onSubmit(){
    console.log(this.ouvrage);
    this.saveOuvrage();

  }

  Annuler(){



    this.router.navigate(['/cuvette']);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }



}
