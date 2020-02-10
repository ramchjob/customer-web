import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from '../model/title';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  
  baseUrl: string = 'api'
  constructor(private http: HttpClient) { }


  getTitle():Observable<Title> {
    return this.http
            .get<Title>(`${this.baseUrl}/title`)
            .pipe(map((response: Title) => response));
  }

  getEmployees():Observable<Employee[]> {
    return this.http
            .get<Employee[]>(`${this.baseUrl}/employees`)
            .pipe(map((response: Employee[]) => response));
  }
}
