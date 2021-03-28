import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Section } from 'src/app/section';
import { Groupement } from '../../groupement';
import { GroupementService } from '../../groupement.service';
import { Saison } from '../../saison';

@Component({
  selector: 'app-groupement',
  templateUrl: './groupement.component.html',
  styleUrls: ['./groupement.component.css']
})
export class GroupementComponent implements OnInit {
  groupements: Groupement[] | undefined;
section?:Section;


  constructor( private groupementService: GroupementService, private router: Router,private authservice:AuthService) { }

  ngOnInit(): void {
    this.getGroupementList();

  }

  private getGroupementList(){
    this.groupementService.getGroupements().subscribe(data =>{
      this.groupements=data;
    });
  }

  updateGroupement(id: any){

    this.router.navigate(['/updateGroupement',id]);

  }

  ajouterGroupement(){

    this.router.navigate(['/ajoutGroupement']);

  }

  deleteGroupement(id : number){

    this.groupementService.deleteGroupement(id).subscribe(data =>{
      console.log(data);
      this.getGroupementList();
    })

  }

  detailsGroupement(id : number){



    this.router.navigate(['/detailGroupement',id]);

  }


  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/groupement');
  }


}
