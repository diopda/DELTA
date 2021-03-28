
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import { Section } from './section';


@Injectable({
  providedIn: 'root'
})
export class SectionService  {


private url='http://localhost:8082/sections'

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


  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.url);
  }

  createSection(section:any):Observable<any>{

    return this.http.post(this.url,section);
  }




getSection(id: any):Observable<Section>{

    return this.http.get<Section>(`${this.url}/${id}`);
}

updateSection(id: any,section:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,section);
}

deleteSection(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}


}
