import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'assets/datas/users.json';

  constructor(private http: HttpClient) { }

  validateUser(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getCurrentUser(): User | null {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
  }

  logout() {
    // Effacer les données de l'utilisateur du stockage local
    localStorage.removeItem('currentUser');
    // Vous pouvez également ajouter ici d'autres logiques de nettoyage
  }
}
