

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import{Bailleur} from './bailleur';
import { Intrant } from './intrant';
@Injectable({
  providedIn: 'root'
})
export class IntrantService  {


private url='http://localhost:8083/intrants'

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


  getIntrants(): Observable<Intrant[]> {
    return this.http.get<Intrant[]>(this.url);
  }


  createIntrant(Intrant:any):Observable<any>{

    return this.http.post(this.url,Intrant);
  }




getIntrant(id: any):Observable<Intrant>{

    return this.http.get<Intrant>(`${this.url}/${id}`);
}

updateIntrant(id: any,Intrant:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,Intrant);
}

deleteIntrant(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}




}
