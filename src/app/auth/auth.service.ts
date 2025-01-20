import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedIn = false;

  signIn(userId: number) {
    localStorage.setItem('userId', userId.toString());
    this.loggedIn = true;
  }

  logout() {
    localStorage.removeItem('userId');
    this.loggedIn = false;
  }

  isAuthenticated() {
    if (localStorage.getItem('userId')) {
      this.loggedIn = true;
    }

    return this.loggedIn;
  }
}
