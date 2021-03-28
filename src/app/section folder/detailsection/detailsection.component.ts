import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Section } from '../../section';
import { SectionService } from '../../section.service';

@Component({
  selector: 'app-detailsection',
  templateUrl: './detailsection.component.html',
  styleUrls: ['./detailsection.component.css']
})
export class DetailsectionComponent implements OnInit {

  id:any;

  section:Section | undefined;
  constructor( private route :ActivatedRoute,private sectionservice: SectionService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.section= new Section();
    this.sectionservice.getSection(this.id).subscribe(data =>{

      this.section=data;

    });
  }
}
