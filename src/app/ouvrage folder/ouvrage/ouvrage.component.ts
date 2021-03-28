import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Ouvrage } from '../../ouvrage';
import { OuvrageService } from '../../ouvrage.service';

@Component({
  selector: 'app-ouvrage',
  templateUrl: './ouvrage.component.html',
  styleUrls: ['./ouvrage.component.css']
})
export class OuvrageComponent implements OnInit {

  ouvrages: Ouvrage[] | undefined;

  constructor(private ouvrageService:OuvrageService,private router: Router,private authservice:AuthService) {  }

  ngOnInit(): void {

    this.getOuvrage();


    }

    getOuvrage(){
      this.ouvrageService.getOuvrages().subscribe((data: any[])=>{

        console.log(data);
        this.ouvrages=data;

      });
    }
    ajouterOuvrage(){
      this.router.navigate(['/ajoutOuvrage']);
    }

    updateOuvrage(id: any){

      this.router.navigate(['/updateOuvrage',id]);

    }


  deleteOuvrage(id : number){

    this.ouvrageService.deleteOuvrage(id).subscribe(data =>{
      console.log(data);
      this.getOuvrage();
    })

  }

  detailsOuvrage(id : number){

    this.router.navigate(['/detailOuvrage',id]);

  }
  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
