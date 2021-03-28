

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { Saison } from './saison';
import { Production } from './production';

@Injectable({
  providedIn: 'root'
})
export class ProductionService  {


private url='http://localhost:8083/productions'

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


  getProductions(): Observable<Production[]> {
    return this.http.get<Production[]>(this.url);
  }

  createProduction(production:any):Observable<any>{

    return this.http.post(this.url,production);
  }




getProduction(id: any):Observable<Production>{

    return this.http.get<Production>(`${this.url}/${id}`);
}

updateProduction(id: any,production:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,production);
}

deleteProduction(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}



}
