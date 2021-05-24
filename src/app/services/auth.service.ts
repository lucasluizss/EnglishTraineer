import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user = new BehaviorSubject<any>(
    this.storageService.get('user')
  );

  constructor(
    private readonly router: Router,
    private readonly fireBaseAuth: AngularFireAuth,
    private readonly storageService: StorageService,
  ) {}

  currentUser(): Promise<any> {
    return this.fireBaseAuth.currentUser;
  }

  async signIn({ email, password }): Promise<void> {
    const { user } = await this.fireBaseAuth.signInWithEmailAndPassword(
      email,
      password
    );
    this.user.next(user);
    this.storageService.set('user', user);
  }

  async signUp({ email, password }): Promise<void> {
    const { user } = await this.fireBaseAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    this.user.next(user);
    this.storageService.set('user', user);
  }

  logout(): void {
    this.fireBaseAuth.signOut().then(() => {
      this.user.next(null);
      this.storageService.clear();
      this.router.navigate(['/sign-in']);
    });
  }
}
