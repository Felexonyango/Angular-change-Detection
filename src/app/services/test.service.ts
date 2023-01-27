import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private httpClient: HttpClient) {}

  getusers():Observable<Iuser[]>{
    return this.httpClient.get<Iuser[]>('https://jsonplaceholder.typicode.com/users')
  
  }


}
