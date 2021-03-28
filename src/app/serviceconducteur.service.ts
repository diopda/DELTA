

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import{Conducteur} from './conducteur';

@Injectable({
  providedIn: 'root'
})
export class  serviceconducteurService {


private url='http://localhost:8081/conducteurs'

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


  getConducteurs(): Observable<Conducteur[]> {
    return this.http.get<Conducteur[]>(this.url);
  }

  createVillage(village:any):Observable<any>{

    return this.http.post(this.url,village);
  }




getConducteur(id: any):Observable<Conducteur>{

    return this.http.get<Conducteur>(`${this.url}/${id}`);
}

updateConducteur(id: any,conducteur:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,conducteur);
}

deleteConducteur(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}


}

