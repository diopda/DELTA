import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuvette } from '../../cuvette';
import { Village } from '../../village';
import { VillageService } from '../../village.service';

@Component({
  selector: 'app-ajoutvillage',
  templateUrl: './ajoutvillage.component.html',
  styleUrls: ['./ajoutvillage.component.css']
})
export class AjoutvillageComponent implements OnInit {

  village:Village=new Village;

  cuvette:Cuvette[] | undefined;

  villages:Village[] | undefined;
  constructor(private villageservice:VillageService,private router:Router) { }

  ngOnInit(): void {


  }

  saveVillage(){
    this.villageservice. createVillage(this.village).subscribe(data =>{
      console.log(data);
    },
    error=>console.log(error));

    this.goToVillageList();

  }

  goToVillageList(){
    this.router.navigate(['/village']);
  }

  onSubmit(){
    console.log(this.village);
this.saveVillage();

  }

}
