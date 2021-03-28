
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import{Bailleur} from './bailleur';
import { Intrant } from './intrant';
import { Organe } from './organe';

@Injectable({
  providedIn: 'root'
})
export class OrganeService  {


private url='http://localhost:8083/organes'

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


  getOrganes(): Observable<Organe[]> {
    return this.http.get<Organe[]>(this.url);
  }


  createOrgane(organe:any):Observable<any>{

    return this.http.post(this.url,organe);
  }




getOrgane(id: any):Observable<Organe>{

    return this.http.get<Organe>(`${this.url}/${id}`);
}

updateOrgane(id: any,organe:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,organe);
}

deleteOrgane(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}



}

