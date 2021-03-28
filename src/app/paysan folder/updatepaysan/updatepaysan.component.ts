import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paysan } from '../../paysan';
import { PaysanService } from '../../paysan.service';

@Component({
  selector: 'app-updatepaysan',
  templateUrl: './updatepaysan.component.html',
  styleUrls: ['./updatepaysan.component.css']
})
export class UpdatepaysanComponent implements OnInit {

  id:any ;
  paysan: Paysan = new Paysan();
  constructor(private paysanservice:  PaysanService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {


    this.paysan = new Paysan();

    this.id = this.route.snapshot.params['id'];

    this.paysanservice.getPaysan(this.id)
    .subscribe(data=>{
      console.log(data)
      this.paysan=data;
    },error =>console.log(error));


  }

  updatePaysan(){
    this.paysanservice.updatePaysan(this.id,this.paysan)
    .subscribe(data=>{
      console.log(data);
      this.paysan=new Paysan();
      this.goToCuvetteList();
    },error => console.log(error)
    );

  }


  onSubmit(){
    this.updatePaysan();

}

  goToCuvetteList(){
  this.router.navigate(['/paysan']);
  }
}
