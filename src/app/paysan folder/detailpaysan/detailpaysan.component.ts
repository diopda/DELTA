import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paysan } from '../../paysan';
import { PaysanService } from '../../paysan.service';

@Component({
  selector: 'app-detailpaysan',
  templateUrl: './detailpaysan.component.html',
  styleUrls: ['./detailpaysan.component.css']
})
export class DetailpaysanComponent implements OnInit {
  id:any;

  paysan:Paysan | undefined;
  constructor( private route :ActivatedRoute,private paysanservice: PaysanService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.paysan= new Paysan();
    this.paysanservice.getPaysan(this.id).subscribe(data =>{

      this.paysan=data;

    });
  }

}
