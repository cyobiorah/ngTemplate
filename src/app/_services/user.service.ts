import { Api } from './../_helpers/api';
import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor (
      private http: HttpClient,
      private api: Api
    ) {}

  getAll() {
    return this.http.get<User[]>(`${this.api.apiUrl}/users`);
  }
}
