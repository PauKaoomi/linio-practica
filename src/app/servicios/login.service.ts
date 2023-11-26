import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  "id": string,
  "username": string,
  "email": string,
  "firstName": string,
  "lastName": string,
  "gender": string,
  "image": string,
  "token": string,
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" })

    return this.http.post<User>(
      "https://dummyjson.com/auth/login",
      JSON.stringify({ username, password }),
      {
        headers
      }
    )
  }
}
