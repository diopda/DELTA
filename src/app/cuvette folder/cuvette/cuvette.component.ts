import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import{Cuvette} from '../../cuvette'
import{ServiceReferentielService}from '../../service-referentiel.service';

@Component({
  selector: 'app-cuvette',
  templateUrl: './cuvette.component.html',
  styleUrls: ['./cuvette.component.css']
})
export class CuvetteComponent implements OnInit {


  cuvettes: Cuvette[] | undefined;

  constructor( private ServiceReferentiel: ServiceReferentielService, private router: Router,private authservice:AuthService) { }

  ngOnInit(): void {
    this.getCuvetteList();

  }

  private getCuvetteList(){
    this.ServiceReferentiel.getCuvettes().subscribe(data =>{
      this.cuvettes=data;
    });
  }

  updateCuvette(id: any){

    this.router.navigate(['/updatecuvette',id]);

  }

  ajouterCuvette(){

    this.router.navigate(['/savecuvette']);

  }

  deleteCuvette(id : number){

    this.ServiceReferentiel.deleteCuvette(id).subscribe(data =>{
      console.log(data);
      this.getCuvetteList();
    })

  }

  detailsCuvette(id : number){



    this.router.navigate(['/detailcuvette',id]);

  }


  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
