import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css'],
})
export class AppNavComponent implements OnInit {
  user: string;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user =
      this.authService.user.value?.name ?? this.authService.user.value?.email;
  }

  logout(): void {
    this.authService.logout();
  }
}
