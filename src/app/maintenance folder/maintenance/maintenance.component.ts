import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Maintenance } from '../../maintenance';
import { MaintenanceService } from '../../maintenance.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  maintenances: Maintenance[] | undefined;


  constructor(private maintenanceservice:MaintenanceService,private router: Router,private authservice:AuthService) {  }




  ngOnInit(): void {

    this.getMaintenance();


    }

    getMaintenance(){
      this.maintenanceservice.getMaintenances().subscribe((data: any[])=>{

        console.log(data);
        this.maintenances=data;

      });
    }
    ajouterMaintenance(){
      this.router.navigate(['/savemaintenance']);
    }

    updateMaintenance(id: any){

      this.router.navigate(['/updatemaintenances',id]);

    }


  deleteMaintenance(id : number){

    this.maintenanceservice.deleteMaintenance(id).subscribe(data =>{
      console.log(data);
      this.getMaintenance();
    })

  }

  detailsMaintenance(id : number){

    this.router.navigate(['/detailmaintenances',id]);

  }

  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
