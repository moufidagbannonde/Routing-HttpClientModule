import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = "https://api.github.com/users"
  // injection de HttpClient
  constructor(private http:HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
