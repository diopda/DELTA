import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Maintenance } from 'src/app/maintenance';
import { MaintenanceService } from 'src/app/maintenance.service';

@Component({
  selector: 'app-detailmaintenance',
  templateUrl: './detailmaintenance.component.html',
  styleUrls: ['./detailmaintenance.component.css']
})
export class DetailmaintenanceComponent implements OnInit {

  id:any;

  maintenance:Maintenance | undefined;
  constructor( private route :ActivatedRoute,private maintenanceservice: MaintenanceService,private router:Router,private authservice:AuthService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.maintenance= new Maintenance();
    this.maintenanceservice.getMaintenance(this.id).subscribe(data =>{

      this.maintenance=data;

    });
  }
  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }

}
