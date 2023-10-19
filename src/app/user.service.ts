import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  Register(User:any) {
    return this.http.post(
      'https://annonce-c12a2-default-rtdb.firebaseio.com/User.json',
      User
    );
  }
  
  getAllUsers() {
    return this.http.get(
      'https://annonce-c12a2-default-rtdb.firebaseio.com/User.json'
    );
  }
}
