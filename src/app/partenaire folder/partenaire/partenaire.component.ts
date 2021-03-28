import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partenaire } from 'src/app/partenaire';
import { PartenaireService } from 'src/app/partenaire.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {

  partenaires: Partenaire[] | undefined;

  constructor(private partenaireService:PartenaireService,private router: Router) {  }

  ngOnInit(): void {

    this.getPartenaire();


    }

    getPartenaire(){
      this.partenaireService.getPartenaires().subscribe((data: any[])=>{

        console.log(data);
        this.partenaires=data;

      });
    }
    ajouterPartenaire(){
      this.router.navigate(['/ajoutpartenaire']);
    }

    updatePartenaire(id: any){

      this.router.navigate(['/updatepartenaire',id]);

    }


  deletePartenaire(id : number){

    this.partenaireService.deletePartenaire(id).subscribe(data =>{
      console.log(data);
      this.getPartenaire();
    })

  }

  detailsPartenaire(id : number){

    this.router.navigate(['/detailpartenaire',id]);

  }


}
