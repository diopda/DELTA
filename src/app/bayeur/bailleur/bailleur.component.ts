import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Bailleur } from '../../bailleur';
import { BailleurService } from '../../bailleur-service.service';

@Component({
  selector: 'app-bailleur',
  templateUrl: './bailleur.component.html',
  styleUrls: ['./bailleur.component.css']
})
export class BailleurComponent implements OnInit {

  bailleurs: Bailleur[] | undefined;

  constructor(private bailleurService:BailleurService,private router: Router,private authservice:AuthService) {  }

  ngOnInit(): void {

    this.getBailleur();


    }

    getBailleur(){
      this.bailleurService.getBayeurs().subscribe((data: any[])=>{

        console.log(data);
        this.bailleurs=data;

      });
    }
    ajouterBayeur(){
      this.router.navigate(['/savebayeur']);
    }

    updateBayeur(id: any){

      this.router.navigate(['/updatebayeur',id]);

    }


  deleteBayeur(id : number){

    this.bailleurService.deleteBayeur(id).subscribe(data =>{
      console.log(data);
      this.getBailleur();
    })

  }

  detailsBayeur(id : number){

    this.router.navigate(['/detailsbayeur',id]);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }



}
