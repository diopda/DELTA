import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Ouvrage } from 'src/app/ouvrage';
import { OuvrageService } from 'src/app/ouvrage.service';

@Component({
  selector: 'app-updateouvrage',
  templateUrl: './updateouvrage.component.html',
  styleUrls: ['./updateouvrage.component.css']
})
export class UpdateouvrageComponent implements OnInit {

  loginForm!: FormGroup ;

  id:any ;
  ouvrage: Ouvrage = new Ouvrage();
  constructor(private ouvrageservice:  OuvrageService, private route: ActivatedRoute,private router: Router,private authservice:AuthService) { }

  ngOnInit(): void {


    this.ouvrage = new Ouvrage();

    this.id = this.route.snapshot.params['id'];

    this.ouvrageservice.getOuvrage(this.id)
    .subscribe(data=>{
      console.log(data)
      this.ouvrage=data;
    },error =>console.log(error));


  }

  updateOuvrage(){
    this.ouvrageservice.updateOuvrage(this.id,this.ouvrage)
    .subscribe(data=>{
      console.log(data);
      this.ouvrage=new Ouvrage();
      this.goToOuvrageList();
    },error => console.log(error)
    );

  }


  onSubmit(){
    this.updateOuvrage();

}

  goToOuvrageList(){
  this.router.navigate(['/ouvrage']);
  }

  Annuler(){



    this.router.navigate(['/ouvrage']);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
