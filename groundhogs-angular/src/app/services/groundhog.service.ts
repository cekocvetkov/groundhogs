import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Groundhog } from './groundhog';

@Injectable({
  providedIn: 'root',
})
export class GroundhogService {
  constructor(private http: HttpClient) {}

  getGroundhogs(): Observable<Groundhog[]> {
    return this.http.get<Groundhog[]>('http://localhost:3001/groundhogs');
  }
}
