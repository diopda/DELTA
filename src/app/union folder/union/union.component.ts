import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Union } from '../../union';
import { UnionService } from '../../union.service';


@Component({
  selector: 'app-union',
  templateUrl: './union.component.html',
  styleUrls: ['./union.component.css']
})
export class UnionComponent implements OnInit {

  unions: Union[] | undefined;




  constructor( private unionService: UnionService, private router: Router) { }

  ngOnInit(): void {
    this.getUnionList();

  }

  private getUnionList(){
    this.unionService.getUnions().subscribe(data =>{
      this.unions=data;
    });
  }

  updateUnion(id: any){

    this.router.navigate(['/updateunion',id]);

  }

  ajouterUnion(){

    this.router.navigate(['/saveunion']);

  }

  deleteUnion(id : number){

    this.unionService.deleteUnion(id).subscribe(data =>{
      console.log(data);
      this.getUnionList();
    })

  }

  detailsUnion(id : number){

    this.router.navigate(['/detailsunion',id]);

  }
}
