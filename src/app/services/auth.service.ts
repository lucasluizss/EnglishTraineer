import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user = new BehaviorSubject<any>(
    JSON.parse(localStorage.getItem('@EnglishTrainner:user'))
  );

  constructor(
    private readonly fireBaseAuth: AngularFireAuth,
    private readonly router: Router
  ) {}

  async signIn({ email, password }): Promise<void> {
    const { user } = await this.fireBaseAuth.signInWithEmailAndPassword(
      email,
      password
    );
    this.user.next(user);
    localStorage.setItem('@EnglishTrainner:user', JSON.stringify(user));
  }

  async signUp({ email, password }): Promise<void> {
    const { user } = await this.fireBaseAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    this.user.next(user);
    localStorage.setItem('@EnglishTrainner:user', JSON.stringify(user));
  }

  logout(): void {
    this.fireBaseAuth.signOut().then(() => {
      this.user.next(null);
      localStorage.clear();
      this.router.navigate(['/login']);
    });
  }
}
