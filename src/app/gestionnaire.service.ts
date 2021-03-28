

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import{Gestionnaire} from './gestionnaire';
@Injectable({
  providedIn: 'root'
})
export class GestionnaireService  {


private url='http://localhost:8081/gestionnaires'

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


  getGestionnaires(): Observable<Gestionnaire[]> {
    return this.http.get<Gestionnaire[]>(this.url);
  }


  createGestionnaire(Gestionnaire:any):Observable<any>{

    return this.http.post(this.url,Gestionnaire);
  }




getGestionnaire(id: any):Observable<Gestionnaire>{

    return this.http.get<Gestionnaire>(`${this.url}/${id}`);
}

updateGestionnaire(id: any,Gestionnaire:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,Gestionnaire);
}

deleteGestionnaire(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}


}
