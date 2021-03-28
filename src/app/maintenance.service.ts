
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { retry, catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from "@angular/common/http";
import {  throwError } from 'rxjs';
import{Bailleur} from './bailleur';
import { Intrant } from './intrant';
import { Maintenance } from './maintenance';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService  {


private url='http://localhost:8083/maintenances'

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


  getMaintenances(): Observable<Maintenance[]> {
    return this.http.get<Maintenance[]>(this.url);
  }


  createMaintenance(Maintenance:any):Observable<any>{

    return this.http.post(this.url,Maintenance);
  }




getMaintenance(id: any):Observable<Maintenance>{

    return this.http.get<Maintenance>(`${this.url}/${id}`);
}

updateMaintenance(id: any,Maintenance:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,Maintenance);
}

deleteMaintenance(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}



}
