import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paysan } from '../../paysan';
import { PaysanService } from '../../paysan.service';

@Component({
  selector: 'app-paysan',
  templateUrl: './paysan.component.html',
  styleUrls: ['./paysan.component.css']
})
export class PaysanComponent implements OnInit {

  paysans: Paysan[] = [];
  paysanss: Paysan | undefined;
  currentIndex=-1;
  prenom='';
  paysan:Paysan | undefined ;

  constructor(private paysanService:PaysanService,private router: Router) {  }

  ngOnInit(): void {

    this.getPaysan();


    }

    getPaysan(){
      this.paysanService.getPaysans().subscribe((data: any[])=>{

        console.log(data);
        this.paysans=data;

      });
    }
    ajouterPaysan(){
      this.router.navigate(['/savepaysan']);
    }

    updatePaysan(id: any){

      this.router.navigate(['/updatepaysan',id]);

    }


  deletePaysan(id : number){

    this.paysanService.deletePaysan(id).subscribe(data =>{
      console.log(data);
      this.getPaysan();
    })

  }

  detailsPaysan(id : number){

    this.router.navigate(['/detailspaysan',id]);

  }
  searchPrenom(): void {
    this.paysanService.getPrenom(this.prenom)
      .subscribe(
        data => {
          this.paysanss = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
