import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from '@services/auth.service';

@Injectable({ providedIn: 'root' })
export class AppGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(): boolean {
    if (!!this.authService.user.value) {
      return true;
    }

    this.authService.logout();
    return false;
  }
}
