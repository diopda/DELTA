import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Cuvette } from '../../cuvette';
import { ServiceReferentielService } from '../../service-referentiel.service';

@Component({
  selector: 'app-detailcuvette',
  templateUrl: './detailcuvette.component.html',
  styleUrls: ['./detailcuvette.component.css']
})
export class DetailcuvetteComponent implements OnInit {

  id:any;

  cuvette:Cuvette | undefined;
  constructor( private route :ActivatedRoute,private cuvetteservice: ServiceReferentielService,private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.cuvette= new Cuvette();
    this.cuvetteservice.getCuvette(this.id).subscribe(data =>{

      this.cuvette=data;

    });
  }
  Annuler(){



    this.router.navigate(['/cuvette']);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
