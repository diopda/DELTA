import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Section } from '../../section';
import { SectionService } from '../../section.service';
import { Union } from '../../union';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  sections: Section[] | undefined;

  unions:Union[] | undefined;



  constructor( private SectionService: SectionService, private router: Router) { }

  ngOnInit(): void {
    this.getSectionList();

  }

  private getSectionList(){
    this.SectionService.getSections().subscribe(data =>{
      this.sections=data;
    });
  }

  updateSection(id: any){

    this.router.navigate(['/updatesection',id]);

  }

  ajouterSection(){

    this.router.navigate(['/savesection']);

  }

  deleteSection(id : number){

    this.SectionService.deleteSection(id).subscribe(data =>{
      console.log(data);
      this.getSectionList();
    })

  }

  detailsSection(id : number){

    this.router.navigate(['/detailsection',id]);

  }


}
