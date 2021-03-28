import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Bailleur } from '../../../bailleur';
import { BailleurService } from '../../../bailleur-service.service';

@Component({
  selector: 'app-updatebayeur',
  templateUrl: './updatebayeur.component.html',
  styleUrls: ['./updatebayeur.component.css']
})
export class UpdatebayeurComponent implements OnInit {

  id:any ;
  bayeur: Bailleur = new Bailleur();
  constructor(private bayeurservice:  BailleurService, private route: ActivatedRoute,private router: Router,private authservice:AuthService) { }

  ngOnInit(): void {


    this.bayeur = new Bailleur();

    this.id = this.route.snapshot.params['id'];

    this.bayeurservice.getBayeur(this.id)
    .subscribe(data=>{
      console.log(data)
      this.bayeur=data;
    },error =>console.log(error));


  }

  updateBayeur(){
    this.bayeurservice.updateBayeur(this.id,this.bayeur)
    .subscribe(data=>{
      console.log(data);
      this.bayeur=new Bailleur();
      this.goToCuvetteList();
    },error => console.log(error)
    );

  }


  onSubmit(){
    this.updateBayeur();

}

  goToCuvetteList(){
  this.router.navigate(['/bailleur']);
  }

  Annuler(){



    this.router.navigate(['/bailleur']);

  }
  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
