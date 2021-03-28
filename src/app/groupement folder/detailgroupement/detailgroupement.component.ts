import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Groupement } from 'src/app/groupement';
import { GroupementService } from 'src/app/groupement.service';

@Component({
  selector: 'app-detailgroupement',
  templateUrl: './detailgroupement.component.html',
  styleUrls: ['./detailgroupement.component.css']
})
export class DetailgroupementComponent implements OnInit {

  id:any;

  groupement:Groupement | undefined;
  constructor( private route :ActivatedRoute,private groupementservice: GroupementService,private router: Router,private authservice:AuthService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.groupement= new Groupement();
    this.groupementservice.getGroupement(this.id).subscribe(data =>{

      this.groupement=data;

    });
  }

  Annuler(){



    this.router.navigate(['/groupement']);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }

}
