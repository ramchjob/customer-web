import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from '../model/title';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  constructor(private http: HttpClient) { }

  getTitle():Observable<Title> {
    return this.http
            .get<Title>(`/title`)
            .pipe(map((response: Title) => response));
  }

  getCustomers():Observable<Title> {
    return this.http
            .get<Title>(`/customers`)
            .pipe(map((response: Title) => response));
  }
}
