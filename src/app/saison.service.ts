
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { Saison } from './saison';

@Injectable({
  providedIn: 'root'
})
export class SaisonService  {


private url='http://localhost:8083/saisons'

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


  getSaisons(): Observable<Saison[]> {
    return this.http.get<Saison[]>(this.url);
  }

  createVillage(village:any):Observable<any>{

    return this.http.post(this.url,village);
  }




getSaison(id: any):Observable<Saison>{

    return this.http.get<Saison>(`${this.url}/${id}`);
}

updateSaison(id: any,saison:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,saison);
}

deleteSaison(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}



}
