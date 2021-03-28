
import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { Utilisateur } from './utilisateur';

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
export class UtilisateurService  {


private url='http://localhost:8081/utilisateurs'


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


  getVillages(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.url);
  }

  createVillage(utilisateur:any):Observable<any>{

    return this.http.post(this.url,utilisateur);
  }




getUtilisateur(id: any):Observable<Utilisateur>{

    return this.http.get<Utilisateur>(`${this.url}/${id}`);
}

updateUtilisateur(id: any,utilisateur:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,utilisateur);
}

deleteUtilisateur(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}




}
