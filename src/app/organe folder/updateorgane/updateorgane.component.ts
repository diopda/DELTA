import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Organe } from 'src/app/organe';
import { OrganeService } from 'src/app/organe.service';

@Component({
  selector: 'app-updateorgane',
  templateUrl: './updateorgane.component.html',
  styleUrls: ['./updateorgane.component.css']
})
export class UpdateorganeComponent implements OnInit {

  loginForm!: FormGroup ;

  id:any ;
  organe: Organe = new Organe();
  constructor(private organeservice:  OrganeService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {


    this.organe = new Organe();

    this.id = this.route.snapshot.params['id'];

    this.organeservice.getOrgane(this.id)
    .subscribe(data=>{
      console.log(data)
      this.organe=data;
    },error =>console.log(error));


  }

  updateOrgane(){
    this.organeservice.updateOrgane(this.id,this.organe)
    .subscribe(data=>{
      console.log(data);
      this.organe=new Organe();
      this.goToOrganeList();
    },error => console.log(error)
    );

  }


  onSubmit(){
    this.updateOrgane();

}

  goToOrganeList(){
  this.router.navigate(['/organe']);
  }

  Annuler(){



    this.router.navigate(['/organe']);

  }

}
