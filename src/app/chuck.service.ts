import { Injectable } from '@angular/core';
import { ChuckInterface } from './chuck.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private http: HttpClient) { }

  getChuck():Observable<ChuckInterface> {
    return this.http.get<ChuckInterface>('https://api.chucknorris.io/jokes/random');
  }
}
