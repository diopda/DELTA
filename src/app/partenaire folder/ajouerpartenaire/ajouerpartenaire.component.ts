import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Partenaire } from 'src/app/partenaire';
import { PartenaireService } from 'src/app/partenaire.service';

@Component({
  selector: 'app-ajouerpartenaire',
  templateUrl: './ajouerpartenaire.component.html',
  styleUrls: ['./ajouerpartenaire.component.css']
})
export class AjouerpartenaireComponent implements OnInit {

  loginForm!: FormGroup ;
  isSubmitted  =  false;
  partenaire: Partenaire= new Partenaire;


  constructor(private partenaireservice : PartenaireService,private router:Router,private formBuilder: FormBuilder,private authservice:AuthService) { }

  ngOnInit(): void {


  }

  savePartenaire(){
    this.partenaireservice.createPartenaire(this.partenaire).subscribe(data =>{
      console.log(data);
    },
    error=>console.log(error));

    this.goToPartenaireList();

  }

  goToPartenaireList(){
    this.router.navigate(['/partenaire']);
  }

  onSubmit(){
    console.log(this.partenaire);
    this.savePartenaire();

  }
  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }

}
