
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { Ouvrage } from './ouvrage';

@Injectable({
  providedIn: 'root'
})
export class OuvrageService  {


private url='http://localhost:8083/ouvrages'

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

  getOuvrages(): Observable<Ouvrage[]> {
    return this.http.get<Ouvrage[]>(this.url);
  }


  createOuvrage(ouvrage:any):Observable<any>{

    return this.http.post(this.url,ouvrage);
  }




getOuvrage(id: any):Observable<Ouvrage>{

    return this.http.get<Ouvrage>(`${this.url}/${id}`);
}

updateOuvrage(id: any,ouvrage:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,ouvrage);
}

deleteOuvrage(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}


}
