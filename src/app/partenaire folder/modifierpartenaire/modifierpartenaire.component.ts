import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Partenaire } from 'src/app/partenaire';
import { PartenaireService } from 'src/app/partenaire.service';

@Component({
  selector: 'app-modifierpartenaire',
  templateUrl: './modifierpartenaire.component.html',
  styleUrls: ['./modifierpartenaire.component.css']
})
export class ModifierpartenaireComponent implements OnInit {
  loginForm!: FormGroup ;
  id:any ;
  partenaire: Partenaire = new Partenaire();
  constructor(private partenaireservice: PartenaireService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {


    this.partenaire = new Partenaire();

    this.id = this.route.snapshot.params['id'];

    this.partenaireservice.getPartenaire(this.id)
    .subscribe(data=>{
      console.log(data)
      this.partenaire=data;
    },error =>console.log(error));


  }

  updatePartenaire(){
    this.partenaireservice.updatePartenaire(this.id,this.partenaire)
    .subscribe(data=>{
      console.log(data);
      this.partenaire=new Partenaire();
      this.goToPartenaireList();
    },error => console.log(error)
    );

  }


  onSubmit(){
    this.updatePartenaire();

}

  goToPartenaireList(){
  this.router.navigate(['/partenaire']);
  }

}
