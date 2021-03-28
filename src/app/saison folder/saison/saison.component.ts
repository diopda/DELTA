import { Component, OnInit } from '@angular/core';
import { Saison } from '../../saison';
import { SaisonService } from '../../saison.service';

@Component({
  selector: 'app-saison',
  templateUrl: './saison.component.html',
  styleUrls: ['./saison.component.css']
})
export class SaisonComponent implements OnInit {
  saisons: Saison[] | undefined;

  constructor(private saisonservice:SaisonService) {  }

  ngOnInit(): void {

    this.saisonservice.getSaisons().subscribe((data: any[])=>{

      console.log(data);
      this.saisons=data;
    });
  }

}
