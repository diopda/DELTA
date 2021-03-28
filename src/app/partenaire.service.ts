
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { Partenaire } from './partenaire';


@Injectable({
  providedIn: 'root'
})
export class PartenaireService  {


private url='http://localhost:8083/partenaires'

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


  getPartenaires(): Observable<Partenaire[]> {
    return this.http.get<Partenaire[]>(this.url);
  }


  createPartenaire(partenaire:any):Observable<any>{

    return this.http.post(this.url,partenaire);
  }




getPartenaire(id: any):Observable<Partenaire>{

    return this.http.get<Partenaire>(`${this.url}/${id}`);
}

updatePartenaire(id: any,partenaire:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,partenaire);
}

deletePartenaire(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}

getNom(nom: any):Observable<Partenaire>{

  return this.http.get<Partenaire>(`${this.url}/${nom}`);
}

}
