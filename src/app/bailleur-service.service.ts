import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import{Bailleur} from './bailleur';
@Injectable({
  providedIn: 'root'
})
export class BailleurService  {


private url='http://localhost:8081/bayeurs'

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


  getBayeurs(): Observable<Bailleur[]> {
    return this.http.get<Bailleur[]>(this.url);
  }


  createBayeur(Bayeur:any):Observable<any>{

    return this.http.post(this.url,Bayeur);
  }




getBayeur(id: any):Observable<Bailleur>{

    return this.http.get<Bailleur>(`${this.url}/${id}`);
}

updateBayeur(id: any,Bailleur:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,Bailleur);
}

deleteBayeur(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}



}
