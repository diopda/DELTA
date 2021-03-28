

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { Paysan } from './paysan';

@Injectable({
  providedIn: 'root'
})
export class PaysanService  {


private url='http://localhost:8081/paysans';
private urll='http://localhost:8081/prenom';

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


  getPaysans(): Observable<Paysan[]> {
    return this.http.get<Paysan[]>(this.url);
  }


  createPaysan(paysan:any):Observable<any>{

    return this.http.post(this.url,paysan);
  }




getPaysan(id: any):Observable<Paysan>{

    return this.http.get<Paysan>(`${this.url}/${id}`);
}

updatePaysan(id: any,paysan:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,paysan);
}

deletePaysan(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}

getPrenom(nom: any):Observable<Paysan>{

  return this.http.get<Paysan>(`${this.urll}/${nom}`);
}

}
