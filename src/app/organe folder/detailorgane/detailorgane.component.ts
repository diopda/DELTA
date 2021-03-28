import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Organe } from 'src/app/organe';
import { OrganeService } from 'src/app/organe.service';

@Component({
  selector: 'app-detailorgane',
  templateUrl: './detailorgane.component.html',
  styleUrls: ['./detailorgane.component.css']
})
export class DetailorganeComponent implements OnInit {

  id:any;

  organe:Organe | undefined;
  constructor( private route :ActivatedRoute,private organeservice: OrganeService,private router: Router,private authservice:AuthService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.organe= new Organe();
    this.organeservice.getOrgane(this.id).subscribe(data =>{

      this.organe=data;

    });
  }

  Annuler(){



    this.router.navigate(['/organe']);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
