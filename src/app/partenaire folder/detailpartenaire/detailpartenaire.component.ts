import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partenaire } from 'src/app/partenaire';
import { PartenaireService } from 'src/app/partenaire.service';

@Component({
  selector: 'app-detailpartenaire',
  templateUrl: './detailpartenaire.component.html',
  styleUrls: ['./detailpartenaire.component.css']
})
export class DetailpartenaireComponent implements OnInit {

  id:any;

  partenaire:Partenaire | undefined;
  constructor( private route :ActivatedRoute,private partenaireservice: PartenaireService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.partenaire= new Partenaire();
    this.partenaireservice.getPartenaire(this.id).subscribe(data =>{

      this.partenaire=data;

    });
  }


}
