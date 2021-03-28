import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Cuvette } from '../../cuvette';
import { ServiceReferentielService } from '../../service-referentiel.service';

@Component({
  selector: 'app-joutcuvette',
  templateUrl: './joutcuvette.component.html',
  styleUrls: ['./joutcuvette.component.css']
})
export class JoutcuvetteComponent implements OnInit {

  loginForm!: FormGroup ;
  isSubmitted  =  false;
  cuvette: Cuvette= new Cuvette;


  constructor(private referentieleservice:ServiceReferentielService,private router:Router,private formBuilder: FormBuilder,private authservice:AuthService) { }

  ngOnInit(): void {



  }

  saveCuvette(){
    this.referentieleservice.createCuvette(this.cuvette).subscribe(data =>{
      console.log(data);
    },

    error=>console.log(error));


    this.goToCuvetteList();

  }

  goToCuvetteList(){
    this.router.navigate(['/cuvette']);
  }

  onSubmit(){
    console.log(this.cuvette);
    this.saveCuvette();

  }

  Annuler(){



    this.router.navigate(['/cuvette']);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
