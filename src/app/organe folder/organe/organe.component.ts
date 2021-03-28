import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Organe } from '../../organe';
import { OrganeService } from '../../organe.service';

@Component({
  selector: 'app-organe',
  templateUrl: './organe.component.html',
  styleUrls: ['./organe.component.css']
})
export class OrganeComponent implements OnInit {

  organes: Organe[] | undefined;

  constructor(private organeService:OrganeService,private router: Router,private authservice:AuthService) {  }

  ngOnInit(): void {

    this.getOrgane();


    }

    getOrgane(){
      this.organeService.getOrganes().subscribe((data: any[])=>{

        console.log(data);
        this.organes=data;

      });
    }
    ajouterOrgane(){
      this.router.navigate(['/ajoutOrgane']);
    }

    updateOrgane(id: any){

      this.router.navigate(['/updateOrgane',id]);

    }


  deleteORgane(id : number){

    this.organeService.deleteOrgane(id).subscribe(data =>{
      console.log(data);
      this.getOrgane();
    })

  }

  detailsOrgane(id : number){

    this.router.navigate(['/detailOrgane',id]);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
