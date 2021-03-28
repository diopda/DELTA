import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Ouvrage } from 'src/app/ouvrage';
import { OuvrageService } from 'src/app/ouvrage.service';

@Component({
  selector: 'app-detailouvrage',
  templateUrl: './detailouvrage.component.html',
  styleUrls: ['./detailouvrage.component.css']
})
export class DetailouvrageComponent implements OnInit {

  id:any;

  ouvrage:Ouvrage | undefined;
  constructor( private route :ActivatedRoute,private ouvrageservice: OuvrageService,private router: Router,private authservice:AuthService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.ouvrage= new Ouvrage();
    this.ouvrageservice.getOuvrage(this.id).subscribe(data =>{

      this.ouvrage=data;

    });
  }

  Annuler(){
    this.router.navigate(['/ouvrage']);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
