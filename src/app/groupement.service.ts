
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import{Gestionnaire} from './gestionnaire';
import { Groupement } from './groupement';
@Injectable({
  providedIn: 'root'
})
export class GroupementService  {


private url='http://localhost:8082/groupements'

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


  getGroupements(): Observable<Groupement[]> {
    return this.http.get<Groupement[]>(this.url);
  }


  createGroupement(Groupement:any):Observable<any>{

    return this.http.post(this.url,Groupement);
  }




getGroupement(id: any):Observable<Groupement>{

    return this.http.get<Groupement>(`${this.url}/${id}`);
}

updateGroupement(id: any,Groupement:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,Groupement);
}

deleteGroupement(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}



}

