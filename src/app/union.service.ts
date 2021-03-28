
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { Section } from './section';
import { Union } from './union';


@Injectable({
  providedIn: 'root'
})
export class UnionService  {


private url='http://localhost:8082/unions'

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


  getUnions(): Observable<Union[]> {
    return this.http.get<Union[]>(this.url);
  }

  createUnion(union:any):Observable<any>{

    return this.http.post(this.url,union);
  }




getUnion(id: any):Observable<Union>{

    return this.http.get<Union>(`${this.url}/${id}`);
}

updateUnion(id: any,union:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,union);
}

deleteUnion(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}


}
