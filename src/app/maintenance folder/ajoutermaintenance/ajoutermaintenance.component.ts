import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Maintenance } from 'src/app/maintenance';
import { MaintenanceService } from 'src/app/maintenance.service';

@Component({
  selector: 'app-ajoutermaintenance',
  templateUrl: './ajoutermaintenance.component.html',
  styleUrls: ['./ajoutermaintenance.component.css']
})
export class AjoutermaintenanceComponent implements OnInit {

  loginForm!: FormGroup ;

  maintenance: Maintenance= new Maintenance;


  constructor(private maintenanceservice:MaintenanceService,private router:Router,private formBuilder: FormBuilder,private authservice:AuthService) { }

  ngOnInit(): void {



  }

  saveMaintenance(){
    this.maintenanceservice.createMaintenance(this.maintenance).subscribe(data =>{
      console.log(data);
    },

    error=>console.log(error));


    this.goToMaintenanceList();

  }

  goToMaintenanceList(){
    this.router.navigate(['/maintenance']);
  }

  onSubmit(){
    console.log(this.maintenance);
    this.saveMaintenance();

  }
  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
