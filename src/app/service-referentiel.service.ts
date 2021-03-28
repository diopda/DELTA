import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import{Cuvette} from './cuvette';

@Injectable({
  providedIn: 'root'
})
export class ServiceReferentielService {

private  url='http://localhost:8082/cuvettes';



  constructor(private http: HttpClient,
    ) {

    }


  getCuvettes (): Observable<Cuvette[]> {
    return this.http.get<Cuvette[]>(this.url);

  }

  createCuvette(cuvette: any):Observable<any>{

    return this.http.post(this.url,cuvette);

  }

   getCuvette(id: any):Observable<Cuvette>{

    return this.http.get<Cuvette>(`${this.url}/${id}`);
}

updateCuvette(id: any,cuvette:any):Observable<any>{
  return this.http.put(`${this.url}/${id}`,cuvette);
}

deleteCuvette(id :any): Observable<any>{
  return this.http.delete(`${this.url}/${id}`);
}

}



