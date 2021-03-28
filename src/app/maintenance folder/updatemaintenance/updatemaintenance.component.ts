import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Maintenance } from 'src/app/maintenance';
import { MaintenanceService } from 'src/app/maintenance.service';

@Component({
  selector: 'app-updatemaintenance',
  templateUrl: './updatemaintenance.component.html',
  styleUrls: ['./updatemaintenance.component.css']
})
export class UpdatemaintenanceComponent implements OnInit {
  loginForm!: FormGroup ;

  id:any ;
  maintenance: Maintenance = new Maintenance();
  constructor(private mainntenanceservice: MaintenanceService, private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder,private authservice:AuthService) { }

  ngOnInit(): void {


    this.maintenance = new Maintenance();

    this.id = this.route.snapshot.params['id'];

    this.mainntenanceservice.getMaintenance(this.id)
    .subscribe(data=>{
      console.log(data)
      this.maintenance=data;
    },error =>console.log(error));


  }

  updateMaintenance(){
    this.mainntenanceservice.updateMaintenance(this.id,this.maintenance)
    .subscribe(data=>{
      console.log(data);
      this.maintenance=new Maintenance();
      this.goToMaintenanceList();
    },error => console.log(error)
    );

  }


  onSubmit(){
    this.updateMaintenance();

}

  goToMaintenanceList(){
  this.router.navigate(['/maintenance']);
  }
  seDeconnecter(){
    this.authservice.deconnecter();
    this.router.navigateByUrl('/connexion');
  }


}
