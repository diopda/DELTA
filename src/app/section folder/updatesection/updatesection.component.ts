import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from '../../section';
import { SectionService } from '../../section.service';

@Component({
  selector: 'app-updatesection',
  templateUrl: './updatesection.component.html',
  styleUrls: ['./updatesection.component.css']
})
export class UpdatesectionComponent implements OnInit {

  id:any ;
  section: Section = new Section();
  constructor(private sectionservice :  SectionService, private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {


    this.section = new Section();

    this.id = this.route.snapshot.params['id'];

    this.sectionservice.getSection(this.id)
    .subscribe(data=>{
      console.log(data)
      this.section=data;
    },error =>console.log(error));


  }

  updateSection(){
    this.sectionservice.updateSection(this.id,this.section)
    .subscribe(data=>{
      console.log(data);
      this.section=new Section();
      this.goToSectionList();
    },error => console.log(error)
    );

  }


  onSubmit(){
    this.updateSection();

}

  goToSectionList(){
  this.router.navigate(['/section']);
  }


}
