import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Bailleur } from '../../bailleur';
import { BailleurService } from '../../bailleur-service.service';

@Component({
  selector: 'app-detailbailleur',
  templateUrl: './detailbailleur.component.html',
  styleUrls: ['./detailbailleur.component.css']
})
export class DetailbailleurComponent implements OnInit {


  id:any;

  bayeur:Bailleur | undefined;
  constructor( private route :ActivatedRoute,private bayeurservice: BailleurService,private router: Router,private authservice:AuthService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.bayeur= new Bailleur();
    this.bayeurservice.getBayeur(this.id).subscribe(data =>{

      this.bayeur=data;

    });
  }

  Annuler(){



    this.router.navigate(['/bailleur']);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }

}
