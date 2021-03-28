import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Intrant } from '../../intrant';
import { IntrantService } from '../../intrant.service';

@Component({
  selector: 'app-intrant',
  templateUrl: './intrant.component.html',
  styleUrls: ['./intrant.component.css']
})
export class IntrantComponent implements OnInit {

  intrants: Intrant[] | undefined;

  constructor(private intrantService:IntrantService,private router: Router) {  }

  ngOnInit(): void {

    this.getIntrant();


    }

    getIntrant(){
      this.intrantService.getIntrants().subscribe((data: any[])=>{

        console.log(data);
        this.intrants=data;

      });
    }
    ajouterIntrant(){
      this.router.navigate(['/saveintrant']);
    }

    updateIntrant(id: any){

      this.router.navigate(['/updateintrant',id]);

    }


  deleteIntrant(id : number){

    this.intrantService.deleteIntrant(id).subscribe(data =>{
      console.log(data);
      this.getIntrant();
    })

  }

  detailsIntrants(id : number){

    this.router.navigate(['/detailsintrant',id]);

  }

}
