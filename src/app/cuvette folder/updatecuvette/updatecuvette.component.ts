import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Cuvette } from '../../cuvette';
import { ServiceReferentielService } from '../../service-referentiel.service';

@Component({
  selector: 'app-updatecuvette',
  templateUrl: './updatecuvette.component.html',
  styleUrls: ['./updatecuvette.component.css']
})
export class UpdatecuvetteComponent implements OnInit {

  id:any ;
  cuvette: Cuvette = new Cuvette();
  constructor(private cuvetteservice: ServiceReferentielService, private route: ActivatedRoute,private router: Router,private authservice:AuthService) { }

  ngOnInit(): void {


    this.cuvette = new Cuvette();

    this.id = this.route.snapshot.params['id'];

    this.cuvetteservice.getCuvette(this.id)
    .subscribe(data=>{
      console.log(data)
      this.cuvette=data;
    },error =>console.log(error));


  }

  updateCuvette(){
    this.cuvetteservice.updateCuvette(this.id,this.cuvette)
    .subscribe(data=>{
      console.log(data);
      this.cuvette=new Cuvette();
      this.goToCuvetteList();
    },error => console.log(error)
    );

  }


  onSubmit(){
    this.updateCuvette();

}

  goToCuvetteList(){
  this.router.navigate(['/cuvette']);
  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
