import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paysan } from '../../paysan';
import { PaysanService } from '../../paysan.service';

@Component({
  selector: 'app-ajouterpaysan',
  templateUrl: './ajouterpaysan.component.html',
  styleUrls: ['./ajouterpaysan.component.css']
})
export class AjouterpaysanComponent implements OnInit {

  paysan: Paysan= new Paysan;


  constructor(private paysaneservice : PaysanService,private router:Router) { }

  ngOnInit(): void {


  }

  savePaysan(){
    this.paysaneservice.createPaysan(this.paysan).subscribe(data =>{
      console.log(data);
    },
    error=>console.log(error));

    this.goToPaysanList();

  }

  goToPaysanList(){
    this.router.navigate(['/paysan']);
  }

  onSubmit(){
    console.log(this.paysan);
    this.savePaysan();

  }


}
