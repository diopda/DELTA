import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Groupement } from 'src/app/groupement';
import { GroupementService } from 'src/app/groupement.service';
import { Section } from 'src/app/section';

@Component({
  selector: 'app-updategroupement',
  templateUrl: './updategroupement.component.html',
  styleUrls: ['./updategroupement.component.css']
})
export class UpdategroupementComponent implements OnInit {

  id:any ;
  section?:Section;
  groupement: Groupement = new Groupement();
  constructor(private groupementservice:  GroupementService, private route: ActivatedRoute,private router: Router,private authservice:AuthService) { }

  ngOnInit(): void {


    this.groupement = new Groupement();

    this.id = this.route.snapshot.params['id'];

    this.groupementservice.getGroupement(this.id)
    .subscribe(data=>{
      console.log(data)
      this.groupement=data;
    },error =>console.log(error));


  }

  updateGroupement(){
    this.groupementservice.updateGroupement(this.id,this.groupement)
    .subscribe(data=>{
      console.log(data);
      this.groupement=new Groupement();
      this.goToGroupementList();
    },error => console.log(error)
    );

  }


  onSubmit(){
    this.updateGroupement();

}

  goToGroupementList(){
  this.router.navigate(['/groupement']);
  }

  Annuler(){

    this.router.navigate(['/groupement']);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
