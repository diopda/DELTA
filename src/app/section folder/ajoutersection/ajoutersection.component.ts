import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Section } from '../../section';
import { SectionService } from '../../section.service';
import { Union } from '../../union';

@Component({
  selector: 'app-ajoutersection',
  templateUrl: './ajoutersection.component.html',
  styleUrls: ['./ajoutersection.component.css']
})
export class AjoutersectionComponent implements OnInit {

  section: Section= new Section;

  unionlocal!:Union;


  constructor(private sectionservice:SectionService,private router:Router) { }

  ngOnInit(): void {


  }

  saveSection(){
    this.sectionservice.createSection(this.section).subscribe(data =>{
      console.log(data);
    },
    error=>console.log(error));

    this.goToSectionList();

  }

  goToSectionList(){
    this.router.navigate(['/section']);
  }

  onSubmit(){
    console.log(this.section);
    this.saveSection();

  }


}
