import { Component, OnInit } from '@angular/core';
import { VillageService } from '../../village.service';
import { Village } from '../../village';
import { Cuvette } from '../../cuvette';
import { Router } from '@angular/router';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {

villages: Village[] | undefined;

cuvette:Cuvette[] | undefined;




constructor( private VillageService: VillageService, private router: Router) { }

ngOnInit(): void {
  this.getVillageList();

}

private getVillageList(){
  this.VillageService.getVillages().subscribe(data =>{
    this.villages=data;
  });
}

updateVillage(id: any){

  this.router.navigate(['/updatevillage',id]);

}

ajouterVillage(){

  this.router.navigate(['/ajoutvillage']);

}

deleteVillage(id : number){

  this.VillageService.deleteVilllage(id).subscribe(data =>{
    console.log(data);
    this.getVillageList();
  })

}

detailsVillage(id : number){

  this.router.navigate(['/detailsvillage',id]);

}








}
