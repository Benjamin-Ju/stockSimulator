import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://127.0.0.1:5003'

  getAll() {
      return this.http.get(`${this.apiUrl}/users`);
  }

  getById(id: number) {
      return this.http.get(`${this.apiUrl}/user/${id}`);
  }

  register(user: User) {
      return this.http.post(`${this.apiUrl}/users`, user);
  }

  update(user: User) {
      return this.http.put(`${this.apiUrl}/user/${user.id}`, user);
  }

  delete(id: number) {
      return this.http.delete(`${this.apiUrl}/user/${id}`);
  }
}
