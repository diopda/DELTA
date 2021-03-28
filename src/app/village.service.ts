import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import{Village} from './village';


const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class VillageService  {


private url='http://localhost:8082/villages'


  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  getVillages(): Observable<Village[]> {
    return this.http.get<Village[]>(this.url);
  }

  createVillage(village:any):Observable<any>{

    return this.http.post(this.url,village);
  }




getVillage(id: any):Observable<Village>{

    return this.http.get<Village>(`${this.url}/${id}`);
}

updateVillage(id: any,village:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,village);
}

deleteVilllage(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}




}
